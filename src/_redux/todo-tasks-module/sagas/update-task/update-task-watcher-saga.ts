import { fork, take } from 'redux-saga/effects';
import { updateTaskSagaAction } from '@/_redux/todo-tasks-module';
import { updateTaskWorkerSaga } from '@/_redux/todo-tasks-module/sagas/update-task/update-task-worker-saga';

export const UPDATE_TASK_WATCHER_SAGA_NAME = 'UPDATE_TASK_WATCHER_SAGA_NAME';

export function* updateTaskWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof updateTaskSagaAction> = yield take(
      updateTaskSagaAction.type,
    );

    yield fork(updateTaskWorkerSaga, payload);
  }
}
