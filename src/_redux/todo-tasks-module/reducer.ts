import {
  SET_TASKS,
  SET_TASKS_LOADING_FINISH,
  SET_TASKS_LOADING_START,
  setTaskIsLoadingFinishSagaAction,
  setTaskIsLoadingStartSagaAction,
  setTasksAction,
  setTasksLoadingFinishAction,
  setTasksLoadingStartAction,
  updateTaskSagaAction,
} from '@/_redux/todo-tasks-module/actions';
import { TasksStorageType } from './_types';

export const initialState: TasksStorageType = {
  tasks: [],
  isLoading: false,
};

type ActionsType =
  | ReturnType<typeof setTasksAction>
  | ReturnType<typeof updateTaskSagaAction>
  | ReturnType<typeof setTaskIsLoadingStartSagaAction>
  | ReturnType<typeof setTaskIsLoadingFinishSagaAction>
  | ReturnType<typeof setTasksLoadingStartAction>
  | ReturnType<typeof setTasksLoadingFinishAction>;

const reducer = (
  state: TasksStorageType = initialState,
  action: ActionsType,
): TasksStorageType => {
  switch (action.type) {
    case SET_TASKS: {
      return {
        ...state,
        tasks: action.payload,
      };
    }
    case SET_TASKS_LOADING_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SET_TASKS_LOADING_FINISH: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
