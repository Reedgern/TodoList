import { put, select } from 'redux-saga/effects';
import {
  setTasksAction,
  TaskItemType,
  tasksSelector,
} from '@/_redux/todo-tasks-module';
import { updateIsLoadingTask } from '@/_utils/updateIsLoadingTask';

export function* startTaskIsLoadingWorkerSaga(id: string) {
  try {
    const tasks: Array<TaskItemType> = yield select(tasksSelector);
    const updatedTasks = updateIsLoadingTask({ tasks, id, isLoading: true });
    yield put(setTasksAction(updatedTasks));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
