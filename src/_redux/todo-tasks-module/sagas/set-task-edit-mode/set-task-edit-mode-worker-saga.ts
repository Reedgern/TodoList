import { put, select } from 'redux-saga/effects';
import { setModalAction } from '@wildberries/notifications';
import { setTasksAction, tasksSelector } from '@/_redux/todo-tasks-module';
import { updateTask } from '@/_redux/todo-tasks-module/sagas/_utils/update-task';

type ParamsType = {
  id: string;
  isEditMode: boolean;
};

export function* setTaskEditModeWorkerSaga({ id, isEditMode }: ParamsType) {
  try {
    yield put(
      setTasksAction(
        updateTask({
          tasks: yield select(tasksSelector),
          id,
          isEditMode,
        }),
      ),
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error in setTaskEditModeWorkerSaga', error);
    yield put(
      setModalAction({
        status: 'error',
        text: error.message,
        title: 'Ошибка редактирования',
      }),
    );
  }
}
