import { call, put, select } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import { setModalAction } from '@wildberries/notifications';
import { batchActions } from 'redux-batched-actions';
import { setTasksAction, tasksSelector } from '@/_redux/todo-tasks-module';
import { updateTask } from '@/_redux/todo-tasks-module/sagas/_utils/update-task';
import { deleteTaskRequest } from '@/api/requests/delete-task';
import { deleteTask } from '@/_redux/todo-tasks-module/sagas/_utils/delete-task';

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
          title: 'Успех',
          text: 'Таска успешно удалена!',
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
          title: 'Ошибка удаления',
        }),
        setTasksAction(tasksWithLoadingTask),
      ]),
    );
  }
}
