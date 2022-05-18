import { fork, take } from 'redux-saga/effects';
import { addTaskSagaAction } from '../../actions';
import { addTaskWorkerSaga } from './addTaskWorkerSaga';

export const ADD_TASK_WATCHER_SAGA_NAME = 'ADD_TASK_WATCHER_SAGA_NAME';

export function* addTaskWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof addTaskSagaAction> = yield take(
      addTaskSagaAction.type,
    );
    yield fork(addTaskWorkerSaga, payload);
  }
}
