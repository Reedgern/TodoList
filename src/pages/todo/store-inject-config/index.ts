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
  UPDATE_TASK_WATCHER_SAGA_NAME,
  updateTaskWatcherSaga,
} from '@/_redux/todo-tasks-module/sagas/update-task';
import {
  DELETE_TASK_WATCHER_SAGA_NAME,
  deleteTaskWatcherSaga,
} from '@/_redux/todo-tasks-module/sagas/delete-task';

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
      { saga: updateTaskWatcherSaga, name: UPDATE_TASK_WATCHER_SAGA_NAME },
      { saga: deleteTaskWatcherSaga, name: DELETE_TASK_WATCHER_SAGA_NAME },
    ],
  };
};
