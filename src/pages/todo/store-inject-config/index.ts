import { StoreInjectConfig } from '@mihanizm56/redux-core-modules';
import {
  fetchTasksSagaAction,
  TASKS_REDUCER_NAME,
} from '@/_redux/todo-tasks-module';
import {
  FETCH_TASKS_WATCHER_SAGA_NAME,
  fetchTasksWatcherSaga,
} from '@/_redux/todo-tasks-module/sagas/fetch-tasks';
import tasksReducer from '@/_redux/todo-tasks-module/reducer';
import addTaskFormReducer, {
  ADD_TASK_FORM_REDUCER_NAME,
} from '@/pages/todo/page/_redux/add-task-form-module';
import {
  START_TASK_IS_LOADING_WATCHER_SAGA_NAME,
  startTaskIsLoadingWatcherSaga,
} from '@/_redux/todo-tasks-module/sagas/start-task-is-loading';
import {
  FINISH_TASK_IS_LOADING_WATCHER_SAGA_NAME,
  finishTaskIsLoadingWatcherSaga,
} from '@/_redux/todo-tasks-module/sagas/finish-task-is-loading';
import {
  UPDATE_TASK_WATCHER_SAGA_NAME,
  updateTaskWatcherSaga,
} from '@/_redux/todo-tasks-module/sagas/update-task';

export const storeInjectConfig = (): StoreInjectConfig => {
  return {
    additionalConfig: {
      callbackOnMount: (dispatch) => {
        dispatch(fetchTasksSagaAction());
      },
    },
    reducersToInject: [
      {
        name: TASKS_REDUCER_NAME,
        reducer: tasksReducer,
      },
      {
        name: ADD_TASK_FORM_REDUCER_NAME,
        reducer: addTaskFormReducer,
      },
    ],
    sagasToInject: [
      { saga: fetchTasksWatcherSaga, name: FETCH_TASKS_WATCHER_SAGA_NAME },
      {
        saga: startTaskIsLoadingWatcherSaga,
        name: START_TASK_IS_LOADING_WATCHER_SAGA_NAME,
      },
      {
        saga: finishTaskIsLoadingWatcherSaga,
        name: FINISH_TASK_IS_LOADING_WATCHER_SAGA_NAME,
      },
      { saga: updateTaskWatcherSaga, name: UPDATE_TASK_WATCHER_SAGA_NAME },
    ],
  };
};
