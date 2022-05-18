import { call, put } from 'redux-saga/effects';
import { updateTaskRequest } from '@/api/requests/update-task';
import { fetchTasksWorkerSaga } from '../fetch-tasks';
import { addErrorAction } from '../../actions';
import { TaskItemType } from '../../types';

export function* updateTaskWorkerSaga(task: TaskItemType) {
  const response = yield call(updateTaskRequest, task);
  yield call(fetchTasksWorkerSaga);

  if (response.error) {
    yield put(addErrorAction(response.errorText));
  }
}
