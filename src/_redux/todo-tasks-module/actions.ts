import { IReduxBaseAction, IReduxAction } from '@mihanizm56/redux-core-modules';
import {
  SetTaskActionPayloadType,
  TaskItemType,
} from '@/_redux/todo-tasks-module/_types';

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

export const SET_TASK_IS_LOADING_START = 'SET_TASK_IS_LOADING_START';
export const setTaskIsLoadingStartSagaAction: IReduxAction<
  string,
  typeof SET_TASK_IS_LOADING_START
> = (payload) => ({
  type: SET_TASK_IS_LOADING_START,
  payload,
});
setTaskIsLoadingStartSagaAction.type = SET_TASK_IS_LOADING_START;

export const SET_TASK_IS_LOADING_FINISH = 'SET_TASK_IS_LOADING_FINISH';
export const setTaskIsLoadingFinishSagaAction: IReduxAction<
  string,
  typeof SET_TASK_IS_LOADING_FINISH
> = (payload) => ({
  type: SET_TASK_IS_LOADING_FINISH,
  payload,
});
setTaskIsLoadingFinishSagaAction.type = SET_TASK_IS_LOADING_FINISH;

export const UPDATE_TASK = 'UPDATE_TASK';
export const updateTaskSagaAction: IReduxAction<
  TaskItemType,
  typeof UPDATE_TASK
> = (payload) => ({
  type: UPDATE_TASK,
  payload,
});
updateTaskSagaAction.type = UPDATE_TASK;

export const DELETE_TASK = 'DELETE_TASK';
export const deleteTaskSagaAction: IReduxAction<string, typeof DELETE_TASK> = (
  payload,
) => ({
  type: DELETE_TASK,
  payload,
});
deleteTaskSagaAction.type = DELETE_TASK;
