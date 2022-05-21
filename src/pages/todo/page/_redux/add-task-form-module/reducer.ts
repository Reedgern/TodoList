import {
  SET_ADD_TASK_FORM_ERROR,
  SET_ADD_TASK_FORM_LOADING_FINISH,
  SET_ADD_TASK_FORM_LOADING_START,
  setAddTaskFormErrorAction,
  setAddTaskFormInitialValuesAction,
  setAddTaskFormLoadingFinishAction,
  setAddTaskFormLoadingStartAction,
} from '@/pages/todo/page/_redux/add-task-form-module/actions';
import { AddTaskFormStorageType } from './types';

export const initialState: AddTaskFormStorageType = {
  error: '',
  isLoading: false,
  initialValues: {
    description: '',
    isCompleted: false,
  },
};

type ActionsType =
  | ReturnType<typeof setAddTaskFormErrorAction>
  | ReturnType<typeof setAddTaskFormLoadingStartAction>
  | ReturnType<typeof setAddTaskFormLoadingFinishAction>
  | ReturnType<typeof setAddTaskFormInitialValuesAction>;

const reducer = (
  state: AddTaskFormStorageType = initialState,
  action: ActionsType,
): AddTaskFormStorageType => {
  switch (action.type) {
    case SET_ADD_TASK_FORM_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SET_ADD_TASK_FORM_LOADING_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SET_ADD_TASK_FORM_LOADING_FINISH: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
