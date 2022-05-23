import {
  SET_TASK_IS_LOADING_FINISH,
  SET_TASK_IS_LOADING_START,
  SET_TASKS,
  SET_TASKS_LOADING_FINISH,
  SET_TASKS_LOADING_START,
  setTaskIsLoadingFinishAction,
  setTaskIsLoadingStartAction,
  setTasksAction,
  setTasksLoadingFinishAction,
  setTasksLoadingStartAction,
  UPDATE_TASK_BY_ID,
  updateTaskByIdAction,
} from '@/_redux/todo-tasks-module/actions';
import { TasksStorageType } from './_types';

export const initialState: TasksStorageType = {
  tasks: [],
  isLoading: false,
};

type ActionsType =
  | ReturnType<typeof setTasksAction>
  | ReturnType<typeof updateTaskByIdAction>
  | ReturnType<typeof setTaskIsLoadingStartAction>
  | ReturnType<typeof setTaskIsLoadingFinishAction>
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
    case SET_TASK_IS_LOADING_START: {
      // не используем логику в редюсере, которую можно написать где то в другом месте (саги/контейнеры)
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload) {
            return task;
          }

          return {
            ...task,
            isLoading: true,
          };
        }),
      };
    }
    case SET_TASK_IS_LOADING_FINISH: {
      return {
        ...state,
        // не используем логику в редюсере, которую можно написать где то в другом месте (саги/контейнеры)
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload) {
            return task;
          }

          return {
            ...task,
            isLoading: false,
          };
        }),
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
    case UPDATE_TASK_BY_ID: {
      return {
        ...state,
        // не используем логику в редюсере, которую можно написать где то в другом месте (саги/контейнеры)
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }

          return task;
        }),
      };
    }
    default:
      return state;
  }
};

export default reducer;
