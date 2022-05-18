import {
  ADD_ERROR,
  CLEAR_ERRORS,
  SET_TASKS,
  TOGGLE_TASKS_LOADING,
} from '@/_redux/todoTasks/actions';
import { ITodoState } from './types';

export const initialState: ITodoState = {
  tasks: null,
  isLoading: false,
  errors: [],
};

type ActionsType = {
  type: string;
  payload: any;
};

const reducer = (
  state: ITodoState = initialState,
  { type, payload }: ActionsType,
): ITodoState => {
  switch (type) {
    case SET_TASKS: {
      return {
        ...state,
        tasks: payload.tasks,
      };
    }
    case ADD_ERROR: {
      return {
        ...state,
        errors: [...state.errors, payload.error],
      };
    }
    case CLEAR_ERRORS: {
      return {
        ...state,
        errors: [],
      };
    }
    case TOGGLE_TASKS_LOADING: {
      return {
        ...state,
        isLoading: payload.isLoading,
      };
    }

    default:
      return state;
  }
};

export default reducer;
