import { fork, take } from 'redux-saga/effects';
import { setTaskIsLoadingFinishSagaAction } from '@/_redux/todo-tasks-module';
import { finishTaskIsLoadingWorkerSaga } from '@/_redux/todo-tasks-module/sagas/finish-task-is-loading/finish-task-is-loading-worker-saga';

export const FINISH_TASK_IS_LOADING_WATCHER_SAGA_NAME =
  'FINISH_TASK_IS_LOADING_WATCHER_SAGA_NAME';

export function* finishTaskIsLoadingWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof setTaskIsLoadingFinishSagaAction> =
      yield take(setTaskIsLoadingFinishSagaAction.type);

    yield fork(finishTaskIsLoadingWorkerSaga, payload);
  }
}
