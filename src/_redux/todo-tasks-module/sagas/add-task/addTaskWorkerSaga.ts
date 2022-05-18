import { call, put } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import { addTaskRequest } from '@/api/requests/add-task';
import { addErrorAction } from '../../actions';
import { fetchTasksWorkerSaga } from '../fetch-tasks';
import { AddTaskSagaActionPayloadType } from '../../types';

export function* addTaskWorkerSaga({
  description,
  isCompleted,
}: AddTaskSagaActionPayloadType) {
  const response: IResponse = yield call(addTaskRequest, {
    description,
    isCompleted,
  });
  yield call(fetchTasksWorkerSaga);
  if (response.error) {
    yield put(addErrorAction(response.errorText));
  }
}
