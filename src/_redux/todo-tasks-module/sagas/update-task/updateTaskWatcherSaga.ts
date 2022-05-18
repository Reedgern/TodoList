import { fork, take } from 'redux-saga/effects';
import { updateTaskSagaAction } from '../../actions';
import { updateTaskWorkerSaga } from './updateTaskWorkerSaga';

export const UPDATE_TASK_WATCHER_SAGA_NAME = 'UPDATE_TASK_WATCHER_SAGA_NAME';

export function* updateTaskWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof updateTaskSagaAction> = yield take(
      updateTaskSagaAction.type,
    );
    yield fork(updateTaskWorkerSaga, payload);
  }
}
