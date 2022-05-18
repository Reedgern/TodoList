import { call, put } from 'redux-saga/effects';
import { deleteTaskRequest } from '@/api/requests/delete-task';
import { addErrorAction } from '@/_redux/todo-tasks-module';
import { fetchTasksWorkerSaga } from '@/_redux/todo-tasks-module/sagas/fetch-tasks';

export function* deleteTaskWorkerSaga(id: string) {
  const response = yield call(deleteTaskRequest, id);
  yield call(fetchTasksWorkerSaga);
  if (response.error) {
    yield put(addErrorAction(response.errorText));
  }
}
