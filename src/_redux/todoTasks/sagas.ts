import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  ADD_NEW_TASK,
  clearErrorsAction,
  DELETE_TASK,
  GET_TASKS,
  setErrorAction,
  setTodoTasksAction,
  toggleTaskLoading,
  UPDATE_TASK,
} from '@/_redux/todoTasks/actions';
import {
  createTaskRequest,
  deleteTaskRequest,
  getTodoTasksRequest,
  updateTaskRequest,
} from '@/api/requests/todoTasks';

function* fetchTodoTasksWorkerSaga() {
  yield put(clearErrorsAction());
  yield put(toggleTaskLoading({ isLoading: true }));
  const response = yield call(getTodoTasksRequest);
  if (!response.error) {
    yield put(setTodoTasksAction({ tasks: response.data.tasks }));
  } else {
    yield put(
      setErrorAction({
        error: response.errorText,
      }),
    );
    yield put(setTodoTasksAction({ tasks: null }));
  }
  yield put(toggleTaskLoading({ isLoading: false }));
}

function* addNewTaskWorkerSaga(action) {
  const response = yield call(createTaskRequest, {
    description: action.payload.description,
    isCompleted: action.payload.isCompleted,
  });
  yield call(fetchTodoTasksWorkerSaga);
  if (response.error) {
    yield put(setErrorAction({ error: response.errorText }));
  }
}

function* deleteTaskWorkerSaga(action) {
  const response = yield call(deleteTaskRequest, { id: action.payload.id });
  yield call(fetchTodoTasksWorkerSaga);
  if (response.error) {
    yield put(setErrorAction({ error: response.errorText }));
  }
}

export function* updateTaskWorkerSaga(action) {
  const {
    payload: { id, description, isCompleted },
  } = action;
  const response = yield call(updateTaskRequest, {
    id,
    description,
    isCompleted,
  });
  yield call(fetchTodoTasksWorkerSaga);

  if (response.error) {
    yield put(setErrorAction({ error: response.errorText }));
  }
}

export function* fetchTodoTasksWatcherSaga() {
  yield all([
    takeEvery(GET_TASKS, fetchTodoTasksWorkerSaga),
    takeEvery(ADD_NEW_TASK, addNewTaskWorkerSaga),
    takeEvery(DELETE_TASK, deleteTaskWorkerSaga),
    takeEvery(UPDATE_TASK, updateTaskWorkerSaga),
  ]);
}
