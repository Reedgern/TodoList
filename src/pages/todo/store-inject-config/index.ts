import { StoreInjectConfig } from '@mihanizm56/redux-core-modules';
import { TASKS_REDUCER_NAME } from '@/_redux/todo-tasks-module';
import tasksReducer from '@/_redux/todo-tasks-module/reducer';
import addTaskFormReducer, {
  ADD_TASK_FORM_REDUCER_NAME,
} from '@/pages/todo/_redux/add-task-form-module';
import {
  UPDATE_TASK_WATCHER_SAGA_NAME,
  updateTaskWatcherSaga,
} from '@/_redux/todo-tasks-module/sagas/update-task';
import {
  DELETE_TASK_WATCHER_SAGA_NAME,
  deleteTaskWatcherSaga,
} from '@/_redux/todo-tasks-module/sagas/delete-task';
import { getFetchTasksConfig } from '@/pages/todo/_utils/get-fetch-tasks-config';
import reducerUI, { MODULE_REDUCER_NAME } from '@/_redux/ui-module';

// why func?
export const storeInjectConfig = (): StoreInjectConfig => {
  return {
    initialLoadManagerConfig: getFetchTasksConfig(),
    reducersToInject: [
      {
        name: TASKS_REDUCER_NAME,
        reducer: tasksReducer,
      },
      {
        name: MODULE_REDUCER_NAME,
        reducer: reducerUI,
      },
      {
        name: ADD_TASK_FORM_REDUCER_NAME,
        reducer: addTaskFormReducer,
      },
    ],
    sagasToInject: [
      {
        saga: updateTaskWatcherSaga,
        name: UPDATE_TASK_WATCHER_SAGA_NAME,
      },
      {
        saga: deleteTaskWatcherSaga,
        name: DELETE_TASK_WATCHER_SAGA_NAME,
      },
    ],
  };
};
