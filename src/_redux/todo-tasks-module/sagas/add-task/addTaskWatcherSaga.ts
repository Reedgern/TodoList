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

// НЕ ИСПОЛЬЗУЙ КАМЕЛ КЕЙС В НАЗВАНИИ ФАЙЛОВ
// потом на при смене имени на линуксе - не поменяется имя на винде

// testFile => testfile для винды есть одно и тоже, а для линуха нет. особенности системы
// пиши через test-file
