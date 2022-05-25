import { put, select } from 'redux-saga/effects';
import {
  setTasksAction,
  TaskItemType,
  tasksSelector,
} from '@/_redux/todo-tasks-module';
import { updateTaskById } from '@/_utils/updateTaskById';

type ParamsType = {
  id: string;
} & Partial<TaskItemType>;

export function* updateTaskWorkerSaga(params: ParamsType) {
  try {
    const tasks: Array<TaskItemType> = yield select(tasksSelector);
    const updatedTasks = updateTaskById({
      tasks,
      ...params,
    });
    yield put(setTasksAction(updatedTasks));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
