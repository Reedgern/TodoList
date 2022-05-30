import {
  closeModalAction,
  openModalAction,
  setTasksAction,
  setTasksLoadingFinishAction,
  setTasksLoadingStartAction,
  updateTaskSagaAction,
} from '@/_redux/todo-tasks-module/actions';
import { TasksStorageType } from './_types';

export const initialState: TasksStorageType = {
  tasks: [],
  isLoading: false,
  modalIsOpened: false,
};

type ActionsType =
  | ReturnType<typeof setTasksAction>
  | ReturnType<typeof updateTaskSagaAction>
  | ReturnType<typeof openModalAction>
  | ReturnType<typeof closeModalAction>
  | ReturnType<typeof setTasksLoadingStartAction>
  | ReturnType<typeof setTasksLoadingFinishAction>;

const reducer = (
  state: TasksStorageType = initialState,
  action: ActionsType,
): TasksStorageType => {
  switch (action.type) {
    case setTasksAction.type: {
      return {
        ...state,
        tasks: action.payload,
      };
    }
    case setTasksLoadingStartAction.type: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case setTasksLoadingFinishAction.type: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case openModalAction.type: {
      return {
        ...state,
        modalIsOpened: true,
      };
    }
    case closeModalAction.type: {
      return {
        ...state,
        modalIsOpened: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
