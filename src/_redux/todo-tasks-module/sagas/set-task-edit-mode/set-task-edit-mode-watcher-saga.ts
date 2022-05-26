import { fork, take } from 'redux-saga/effects';
import { setTaskEditModeSagaAction } from '@/_redux/todo-tasks-module';
import { setTaskEditModeWorkerSaga } from '@/_redux/todo-tasks-module/sagas/set-task-edit-mode/set-task-edit-mode-worker-saga';

export const SET_TASK_EDIT_MODE_WATCHER_SAGA =
  'SET_TASK_EDIT_MODE_WATCHER_SAGA';

export function* setTaskEditModeWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof setTaskEditModeSagaAction> =
      yield take(setTaskEditModeSagaAction.type);

    yield fork(setTaskEditModeWorkerSaga, payload);
  }
}
