import { call, put } from 'redux-saga/effects';
import { setModalAction } from '@wildberries/notifications';
import { getTasksListRequest } from '@/api/requests/get-tasks-list';
import {
  setTasksAction,
  resetErrorsAction,
  setTasksLoadingStartAction,
  setTasksLoadingFinishAction,
} from '../../actions';

export function* fetchTasksWorkerSaga() {
  yield put(resetErrorsAction());
  yield put(setTasksLoadingStartAction());
  const response = yield call(getTasksListRequest);
  if (!response.error) {
    yield put(setTasksAction({ tasks: response.data.tasks }));
  } else {
    yield put(
      setModalAction({
        status: 'error',
        text: response.errorText,
        title: 'Ошибка',
      }),
    );
  }
  yield put(setTasksLoadingFinishAction());
}
