import { put, select } from 'redux-saga/effects';
import {
  setTasksAction,
  TaskItemType,
  tasksSelector,
} from '@/_redux/todo-tasks-module';

export function* deleteTaskWorkerSaga(id: string) {
  try {
    const tasks: Array<TaskItemType> = yield select(tasksSelector);
    const updatedTasks = tasks.filter((task) => task.id !== id);
    yield put(setTasksAction(updatedTasks));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
