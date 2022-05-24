import { put, select } from 'redux-saga/effects';
import {
  setTasksAction,
  TaskItemType,
  tasksSelector,
} from '@/_redux/todo-tasks-module';
import { updateTaskById } from '@/_utils/updateTaskById';

export function* updateTaskWorkerSaga({
  id,
  description,
  isCompleted,
}: TaskItemType) {
  try {
    const tasks: Array<TaskItemType> = yield select(tasksSelector);
    const updatedTasks = updateTaskById({
      tasks,
      id,
      description,
      isCompleted,
    });
    yield put(setTasksAction(updatedTasks));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
