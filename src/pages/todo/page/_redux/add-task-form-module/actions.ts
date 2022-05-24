import { IReduxAction, IReduxBaseAction } from '@mihanizm56/redux-core-modules';
import { FormValues } from '@/pages/todo/page/_redux/add-task-form-module/_types';

export const SET_ADD_TASK_FORM_LOADING_START = 'SET_LOADING_START';
export const setAddTaskFormLoadingStartAction: IReduxBaseAction<
  typeof SET_ADD_TASK_FORM_LOADING_START
> = () => ({
  type: SET_ADD_TASK_FORM_LOADING_START,
});
setAddTaskFormLoadingStartAction.type = SET_ADD_TASK_FORM_LOADING_START;

export const SET_ADD_TASK_FORM_LOADING_FINISH = 'SET_LOADING_FINISH';
export const setAddTaskFormLoadingFinishAction: IReduxBaseAction<
  typeof SET_ADD_TASK_FORM_LOADING_FINISH
> = () => ({
  type: SET_ADD_TASK_FORM_LOADING_FINISH,
});
setAddTaskFormLoadingFinishAction.type = SET_ADD_TASK_FORM_LOADING_FINISH;

export const SET_ADD_TASK_FORM_INITIAL_VALUES = 'SET_INITIAL_VALUES';
export const setAddTaskFormInitialValuesAction: IReduxAction<
  FormValues,
  typeof SET_ADD_TASK_FORM_INITIAL_VALUES
> = (payload) => ({
  type: SET_ADD_TASK_FORM_INITIAL_VALUES,
  payload,
});
setAddTaskFormInitialValuesAction.type = SET_ADD_TASK_FORM_INITIAL_VALUES;
