import { call, put, select } from 'redux-saga/effects';
import { setModalAction } from '@wildberries/notifications';
import { IResponse } from '@mihanizm56/fetch-api';
import {
  setTasksAction,
  TaskItemType,
  tasksSelector,
} from '@/_redux/todo-tasks-module';
import { updateTask } from '@/_redux/todo-tasks-module/sagas/_utils/update-task';
import { updateTaskRequest } from '@/api/requests/update-task';
import { setTaskEditModeWorkerSaga } from '@/_redux/todo-tasks-module/sagas/set-task-edit-mode';

type ParamsType = {
  id: string;
} & Partial<TaskItemType>;

// спред лишний. обычные переменные {id, description, isCompleted} были бы читаемыми - а так + 2 оператора
export function* updateTaskWorkerSaga({ id, ...taskFields }: ParamsType) {
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
      description: taskFields.description,
      isCompleted: taskFields.isCompleted,
    });

    if (error) {
      throw new Error(errorText);
    }

    yield put(
      setTasksAction(
        updateTask({
          tasks: yield select(tasksSelector),
          id,
          ...taskFields,
        }),
      ),
    );

    yield put(
      setModalAction({
        status: 'success',
        text: 'Таска изменена успешно',
      }),
    );

    yield call(setTaskEditModeWorkerSaga, { id, isEditMode: false });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error in setTaskEditModeWorkerSaga', error);
    yield put(
      setModalAction({
        status: 'error',
        text: error.message,
        title: 'Ошибка изменения',
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
