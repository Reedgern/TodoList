import { call, put } from 'redux-saga/effects';
import { getTasksListRequest } from '@/api/requests/get-tasks-list';
import {
  setTasksAction,
  resetErrorsAction,
  setTasksLoadingStartAction,
  addErrorAction,
  setTasksLoadingFinishAction,
} from '../../actions';

export function* fetchTasksWorkerSaga() {
  yield put(resetErrorsAction());
  yield put(setTasksLoadingStartAction());
  const response = yield call(getTasksListRequest);
  if (!response.error) {
    yield put(setTasksAction({ tasks: response.data.tasks }));
  } else {
    yield put(addErrorAction(response.errorText));
    yield put(setTasksAction({ tasks: [] }));
  }
  yield put(setTasksLoadingFinishAction());
}
