import { fork, take } from 'redux-saga/effects';
import { setTaskIsLoadingStartSagaAction } from '@/_redux/todo-tasks-module';
import { startTaskIsLoadingWorkerSaga } from './start-task-is-loading-worker-saga';

export const START_TASK_IS_LOADING_WATCHER_SAGA_NAME =
  'START_TASK_IS_LOADING_WATCHER_SAGA_NAME';

export function* startTaskIsLoadingWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof setTaskIsLoadingStartSagaAction> =
      yield take(setTaskIsLoadingStartSagaAction.type);

    yield fork(startTaskIsLoadingWorkerSaga, payload);
  }
}
