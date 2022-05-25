import {
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
    case setAddTaskFormLoadingStartAction.type: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case setAddTaskFormLoadingFinishAction.type: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case setAddTaskFormInitialValuesAction.type: {
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
