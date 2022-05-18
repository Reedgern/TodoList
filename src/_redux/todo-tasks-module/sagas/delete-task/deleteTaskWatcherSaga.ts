import { fork, take } from 'redux-saga/effects';
import { deleteTaskSagaAction } from '../../actions';
import { deleteTaskWorkerSaga } from './deleteTaskWorkerSaga';

export const DELETE_TASK_WATCHER_SAGA_NAME = 'DELETE_TASK_WATCHER_SAGA_NAME';

export function* deleteTaskWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof deleteTaskSagaAction> = yield take(
      deleteTaskSagaAction.type,
    );
    yield fork(deleteTaskWorkerSaga, payload);
  }
}
