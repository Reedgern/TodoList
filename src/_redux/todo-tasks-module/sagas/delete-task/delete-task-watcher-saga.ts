import { fork, take } from 'redux-saga/effects';
import { deleteTaskSagaAction } from '@/_redux/todo-tasks-module';
import { deleteTaskWorkerSaga } from '@/_redux/todo-tasks-module/sagas/delete-task/delete-task-worker-saga';

export const DELETE_TASK_WATCHER_SAGA_NAME = 'DELETE_TASK_WATCHER_SAGA_NAME';

export function* deleteTaskWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof deleteTaskSagaAction> = yield take(
      deleteTaskSagaAction.type,
    );

    yield fork(deleteTaskWorkerSaga, payload);
  }
}
