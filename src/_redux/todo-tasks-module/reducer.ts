import {
  ADD_ERROR,
  addErrorAction,
  RESET_ERRORS,
  resetErrorsAction,
  SET_TASKS,
  SET_TASKS_LOADING_FINISH,
  SET_TASKS_LOADING_START,
  setTasksAction,
  setTasksLoadingFinishAction,
  setTasksLoadingStartAction,
} from '@/_redux/todo-tasks-module/actions';
import { TasksStorageType } from './types';

export const initialState: TasksStorageType = {
  tasks: [],
  isLoading: false,
  errors: [],
};

type ActionsType =
  | ReturnType<typeof setTasksAction>
  | ReturnType<typeof addErrorAction>
  | ReturnType<typeof addErrorAction>
  | ReturnType<typeof resetErrorsAction>
  | ReturnType<typeof resetErrorsAction>
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
        tasks: action.payload.tasks,
      };
    }
    case ADD_ERROR: {
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };
    }
    case RESET_ERRORS: {
      return {
        ...state,
        errors: [],
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
