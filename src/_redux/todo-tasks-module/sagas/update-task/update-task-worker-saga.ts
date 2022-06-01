import { call, put, select } from 'redux-saga/effects';
import { setModalAction } from '@wildberries/notifications';
import { IResponse } from '@mihanizm56/fetch-api';
import { batchActions } from 'redux-batched-actions';
import i18next from 'i18next';
import { setTasksAction, tasksSelector } from '@/_redux/todo-tasks-module';
import { updateTask } from '@/_redux/todo-tasks-module/sagas/_utils/update-task';
import { updateTaskRequest } from '@/api/requests/update-task';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';
import { TaskItemType } from '@/pages/todo/_types';

export function* updateTaskWorkerSaga({
  id,
  description,
  isCompleted,
}: TaskItemType) {
  try {
    yield put(
      setTasksAction(
        updateTask({
          tasks: yield select(tasksSelector),
          id,
          isLoading: true,
        }),
      ),
    );

    const { error, errorText }: IResponse = yield call(updateTaskRequest, {
      id,
      description,
      isCompleted,
    });

    if (error) {
      throw new Error(errorText);
    }

    yield put(
      batchActions([
        setModalAction({
          status: 'success',
          text: i18next.t(TASKS_PAGE_TRANSLATIONS.updateTaskSuccessModalText),
        }),
        setTasksAction(
          updateTask({
            tasks: yield select(tasksSelector),
            id,
            description,
            isCompleted,
            isEditMode: false,
          }),
        ),
      ]),
    );
  } catch (error) {
    console.error('Error in setTaskEditModeWorkerSaga', error);
    yield put(
      setModalAction({
        status: 'error',
        text: error.message,
        title: i18next.t(TASKS_PAGE_TRANSLATIONS.updateTaskErrorModalTitle),
      }),
    );
  } finally {
    yield put(
      setTasksAction(
        updateTask({
          tasks: yield select(tasksSelector),
          id,
          isLoading: false,
        }),
      ),
    );
  }
}
