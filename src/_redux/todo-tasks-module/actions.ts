import { IReduxBaseAction, IReduxAction } from '@mihanizm56/redux-core-modules';
import {
  AddTaskSagaActionPayloadType,
  SetTaskActionPayloadType,
  TaskItemType,
} from '@/_redux/todo-tasks-module/types';

export const FETCH_TASKS = 'FETCH_TASKS';
export const fetchTasksSagaAction: IReduxBaseAction<typeof FETCH_TASKS> =
  () => ({
    type: FETCH_TASKS,
  });
fetchTasksSagaAction.type = FETCH_TASKS;

export const SET_TASKS_LOADING_START = 'SET_TASKS_LOADING_START';
export const setTasksLoadingStartAction: IReduxBaseAction<
  typeof SET_TASKS_LOADING_START
> = () => ({
  type: SET_TASKS_LOADING_START,
});
setTasksLoadingStartAction.type = SET_TASKS_LOADING_START;

export const SET_TASKS_LOADING_FINISH = 'SET_TASKS_LOADING_FINISH';
export const setTasksLoadingFinishAction: IReduxBaseAction<
  typeof SET_TASKS_LOADING_FINISH
> = () => ({
  type: SET_TASKS_LOADING_FINISH,
});
setTasksLoadingFinishAction.type = SET_TASKS_LOADING_FINISH;

export const SET_TASKS = 'SET_TASKS';
export const setTasksAction: IReduxAction<
  SetTaskActionPayloadType,
  typeof SET_TASKS
> = (payload) => ({
  type: SET_TASKS,
  payload,
});
setTasksAction.type = SET_TASKS;

export const ADD_TASK = 'ADD_TASK';
export const addTaskSagaAction: IReduxAction<
  AddTaskSagaActionPayloadType,
  typeof ADD_TASK
> = (payload) => ({
  type: ADD_TASK,
  payload,
});
addTaskSagaAction.type = ADD_TASK;

export const DELETE_TASK = 'DELETE_TASK';
export const deleteTaskSagaAction: IReduxAction<string, typeof DELETE_TASK> = (
  payload,
) => ({
  type: DELETE_TASK,
  payload,
});
deleteTaskSagaAction.type = DELETE_TASK;

export const UPDATE_TASK = 'UPDATE_TASK';
export const updateTaskSagaAction: IReduxAction<
  TaskItemType,
  typeof UPDATE_TASK
> = (payload) => ({
  type: UPDATE_TASK,
  payload,
});
updateTaskSagaAction.type = UPDATE_TASK;

export const ADD_ERROR = 'ADD_ERROR';
export const addErrorAction: IReduxAction<string, typeof ADD_ERROR> = (
  payload,
) => ({
  type: ADD_ERROR,
  payload,
});
addErrorAction.type = ADD_ERROR;

export const RESET_ERRORS = 'RESET_ERRORS';
export const resetErrorsAction: IReduxBaseAction<typeof RESET_ERRORS> = () => ({
  type: RESET_ERRORS,
});
resetErrorsAction.type = RESET_ERRORS;

export const SET_TASK_IS_LOADING_START = 'SET_TASK_IS_LOADING_START';
export const setTaskIsLoadingStartAction: IReduxAction<
  string,
  typeof SET_TASK_IS_LOADING_START
> = (payload) => ({
  type: SET_TASK_IS_LOADING_START,
  payload,
});
setTaskIsLoadingStartAction.type = SET_TASK_IS_LOADING_START;

export const SET_TASK_IS_LOADING_FINISH = 'SET_TASK_IS_LOADING_FINISH';
export const setTaskIsLoadingFinishAction: IReduxAction<
  string,
  typeof SET_TASK_IS_LOADING_FINISH
> = (payload) => ({
  type: SET_TASK_IS_LOADING_FINISH,
  payload,
});
setTaskIsLoadingFinishAction.type = SET_TASK_IS_LOADING_FINISH;

export const UPDATE_TASK_BY_ID = 'UPDATE_TASK_BY_ID';
export const updateTaskByIdAction: IReduxAction<
  TaskItemType,
  typeof UPDATE_TASK_BY_ID
> = (payload) => ({
  type: UPDATE_TASK_BY_ID,
  payload,
});
updateTaskByIdAction.type = UPDATE_TASK_BY_ID;
