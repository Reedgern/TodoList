import { call, put } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import { setModalAction } from '@wildberries/notifications';
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
  if (!response.error) {
    yield put(
      setModalAction({
        status: 'success',
        text: 'Форма отправлена успешно!',
        title: 'Успех',
      }),
    );
  }
  yield call(fetchTasksWorkerSaga);
  if (response.error) {
    yield put(
      setModalAction({
        status: 'error',
        text: response.errorText,
        title: 'Ошибка',
      }),
    );
    yield put(addErrorAction(response.errorText));
  }
}
