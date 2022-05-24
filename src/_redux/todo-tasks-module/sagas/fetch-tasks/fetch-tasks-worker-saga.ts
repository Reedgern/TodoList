import { call, put } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import { setModalAction } from '@wildberries/notifications';
import { getTasksListRequest } from '@/api/requests/get-tasks-list';
import {
  setTasksAction,
  setTasksLoadingStartAction,
  setTasksLoadingFinishAction,
} from '../../actions';

export function* fetchTasksWorkerSaga() {
  yield put(setTasksLoadingStartAction());

  try {
    const { error, data, errorText }: IResponse = yield call(
      getTasksListRequest,
    );

    if (error) {
      throw new Error(errorText);
    }

    yield put(setTasksAction(data.tasks));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);

    yield put(
      setModalAction({
        status: 'error',
        text: error.message,
        title: 'Ошибка',
      }),
    );

    yield put(setTasksAction([]));
  } finally {
    yield put(setTasksLoadingFinishAction());
  }
}
