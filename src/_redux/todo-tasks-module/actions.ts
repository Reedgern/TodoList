import { IReduxBaseAction, IReduxAction } from '@mihanizm56/redux-core-modules';
import {
  SetTaskActionPayloadType,
  UpdateTaskSagaActionPayloadType,
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

export const UPDATE_TASK = 'UPDATE_TASK';
export const updateTaskSagaAction: IReduxAction<
  UpdateTaskSagaActionPayloadType,
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

export const OPEN_MODAL = 'OPEN_MODAL';
export const openModalAction: IReduxBaseAction<typeof OPEN_MODAL> = () => ({
  type: OPEN_MODAL,
});
openModalAction.type = OPEN_MODAL;

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeModalAction: IReduxBaseAction<typeof CLOSE_MODAL> = () => ({
  type: CLOSE_MODAL,
});
closeModalAction.type = CLOSE_MODAL;

export const SET_TASK_EDIT_MODE = 'SET_TASK_EDIT_MODE';
export const setTaskEditModeSagaAction: IReduxAction<
  { id: string; isEditMode: boolean },
  typeof SET_TASK_EDIT_MODE
> = (payload) => ({
  type: SET_TASK_EDIT_MODE,
  payload,
});
setTaskEditModeSagaAction.type = SET_TASK_EDIT_MODE;
