import { call, put, select } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import { setModalAction } from '@wildberries/notifications';
import { batchActions } from 'redux-batched-actions';
import i18next from 'i18next';
import { setTasksAction, tasksSelector } from '@/_redux/todo-tasks-module';
import { updateTask } from '@/_redux/todo-tasks-module/sagas/_utils/update-task';
import { deleteTaskRequest } from '@/api/requests/delete-task';
import { deleteTask } from '@/_redux/todo-tasks-module/sagas/_utils/delete-task';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';

export function* deleteTaskWorkerSaga(id: string) {
  try {
    const tasksWithLoadingTask = updateTask({
      tasks: yield select(tasksSelector),
      id,
      isLoading: true,
    });
    yield put(setTasksAction(tasksWithLoadingTask));

    const { error, errorText }: IResponse = yield call(deleteTaskRequest, {
      id,
    });

    if (error) {
      throw new Error(errorText);
    }

    const tasksWithoutDeletedTask = deleteTask({
      tasks: yield select(tasksSelector),
      id,
    });

    yield put(
      batchActions([
        setModalAction({
          status: 'success',
          text: i18next.t(TASKS_PAGE_TRANSLATIONS.deleteTaskSuccessModalText),
        }),
        setTasksAction(tasksWithoutDeletedTask),
      ]),
    );
  } catch (error) {
    console.error('Error in deleteTaskWorkerSaga', error.message);

    const tasksWithLoadingTask = updateTask({
      tasks: yield select(tasksSelector),
      id,
      isLoading: false,
    });

    yield put(
      batchActions([
        setModalAction({
          status: 'error',
          text: error.message,
          title: i18next.t(TASKS_PAGE_TRANSLATIONS.deleteTaskErrorModalTitle),
        }),
        setTasksAction(tasksWithLoadingTask),
      ]),
    );
  }
}
