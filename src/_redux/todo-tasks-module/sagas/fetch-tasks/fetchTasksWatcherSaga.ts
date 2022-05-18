import { fork, take } from 'redux-saga/effects';
import { fetchTasksSagaAction } from '../../actions';
import { fetchTasksWorkerSaga } from './fetchTasksWorkerSaga';

export const FETCH_TASKS_WATCHER_SAGA_NAME = 'FETCH_TASKS_WATCHER_SAGA_NAME';

export function* fetchTasksWatcherSaga() {
  while (true) {
    yield take(fetchTasksSagaAction.type);
    yield fork(fetchTasksWorkerSaga);
  }
}
