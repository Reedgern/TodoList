import {
  initLoadManagerActionSaga,
  StoreInjectConfig,
} from '@mihanizm56/redux-core-modules';
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

export const storeInjectConfig = (): StoreInjectConfig => {
  return {
    additionalConfig: {
      callbackOnMount: (dispatch) => {
        dispatch(initLoadManagerActionSaga(getFetchTasksConfig()));
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
      {
        saga: updateTaskWatcherSaga,
        name: UPDATE_TASK_WATCHER_SAGA_NAME,
      },
      { saga: deleteTaskWatcherSaga, name: DELETE_TASK_WATCHER_SAGA_NAME },
    ],
  };
};
