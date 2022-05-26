import { call, put, select } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import { setModalAction } from '@wildberries/notifications';
import { setTasksAction, tasksSelector } from '@/_redux/todo-tasks-module';
import { updateTask } from '@/_redux/todo-tasks-module/sagas/_utils/update-task';
import { deleteTaskRequest } from '@/api/requests/delete-task';
import { deleteTask } from '@/_redux/todo-tasks-module/sagas/_utils/delete-task';

export function* deleteTaskWorkerSaga(id: string) {
  try {
    yield put(
      setTasksAction(
        updateTask({ tasks: yield select(tasksSelector), id, isLoading: true }),
      ),
    );
    const { error, errorText }: IResponse = yield call(deleteTaskRequest, {
      id,
    });

    if (error) {
      throw new Error(errorText);
    }
    yield put(
      setTasksAction(deleteTask({ tasks: yield select(tasksSelector), id })),
    );
    yield put(
      setModalAction({
        status: 'success',
        title: 'Успех',
        text: 'Таска успешно удалена!',
      }),
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error in deleteTaskWorkerSaga', error.message);
    yield put(
      setModalAction({
        status: 'error',
        text: error.message,
        title: 'Ошибка удаления',
      }),
    );

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
