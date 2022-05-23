import {
  SET_ADD_TASK_FORM_INITIAL_VALUES,
  SET_ADD_TASK_FORM_LOADING_FINISH,
  SET_ADD_TASK_FORM_LOADING_START,
  setAddTaskFormInitialValuesAction,
  setAddTaskFormLoadingFinishAction,
  setAddTaskFormLoadingStartAction,
} from '@/pages/todo/page/_redux/add-task-form-module/actions';
import { AddTaskFormStorageType } from './_types';

export const initialState: AddTaskFormStorageType = {
  error: '',
  isLoading: false,
  initialValues: {
    description: '',
    isCompleted: false,
  },
};

type ActionsType =
  | ReturnType<typeof setAddTaskFormLoadingStartAction>
  | ReturnType<typeof setAddTaskFormLoadingFinishAction>
  | ReturnType<typeof setAddTaskFormInitialValuesAction>;

const reducer = (
  state: AddTaskFormStorageType = initialState,
  action: ActionsType,
): AddTaskFormStorageType => {
  switch (action.type) {
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
    case SET_ADD_TASK_FORM_INITIAL_VALUES: {
      return {
        ...state,
        initialValues: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
