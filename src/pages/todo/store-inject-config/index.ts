import { StoreInjectConfig } from '@mihanizm56/redux-core-modules';
import { IAdvancedRoute } from '@wildberries/service-router';
import { TASKS_REDUCER_NAME } from '@/_redux/todo-tasks-module';
import {
  FETCH_TASKS_WATCHER_SAGA_NAME,
  fetchTasksWatcherSaga,
} from '@/_redux/todo-tasks-module/sagas/fetch-tasks';
import {
  ADD_TASK_WATCHER_SAGA_NAME,
  addTaskWatcherSaga,
} from '@/_redux/todo-tasks-module/sagas/add-task';
import {
  DELETE_TASK_WATCHER_SAGA_NAME,
  deleteTaskWatcherSaga,
} from '@/_redux/todo-tasks-module/sagas/delete-task';
import {
  UPDATE_TASK_WATCHER_SAGA_NAME,
  updateTaskWatcherSaga,
} from '@/_redux/todo-tasks-module/sagas/update-task';
import tasksReducer from '@/_redux/todo-tasks-module/reducer';

export const storeInjectConfig = (args: IAdvancedRoute): StoreInjectConfig => {
  return {
    reducersToInject: [
      {
        name: TASKS_REDUCER_NAME,
        reducer: tasksReducer,
      },
    ],
    sagasToInject: [
      { saga: fetchTasksWatcherSaga, name: FETCH_TASKS_WATCHER_SAGA_NAME },
      { saga: addTaskWatcherSaga, name: ADD_TASK_WATCHER_SAGA_NAME },
      { saga: deleteTaskWatcherSaga, name: DELETE_TASK_WATCHER_SAGA_NAME },
      { saga: updateTaskWatcherSaga, name: UPDATE_TASK_WATCHER_SAGA_NAME },
    ],
  };
};
