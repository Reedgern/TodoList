import { IReduxAction, IReduxBaseAction } from '@mihanizm56/redux-core-modules';
import { FormValues } from '@/pages/todo/page/_redux/add-task-form-module/types';

export const SET_ADD_TASK_FORM_LOADING_START =
  'SET_ADD_TASK_FORM_LOADING_START';
export const setAddTaskFormLoadingStartAction: IReduxBaseAction<
  typeof SET_ADD_TASK_FORM_LOADING_START
> = () => ({
  type: SET_ADD_TASK_FORM_LOADING_START,
});
setAddTaskFormLoadingStartAction.type = SET_ADD_TASK_FORM_LOADING_START;

export const SET_ADD_TASK_FORM_LOADING_FINISH =
  'SET_ADD_TASK_FORM_LOADING_FINISH';
export const setAddTaskFormLoadingFinishAction: IReduxBaseAction<
  typeof SET_ADD_TASK_FORM_LOADING_FINISH
> = () => ({
  type: SET_ADD_TASK_FORM_LOADING_FINISH,
});
setAddTaskFormLoadingFinishAction.type = SET_ADD_TASK_FORM_LOADING_FINISH;

export const SET_ADD_TASK_FORM_ERROR = 'SET_ADD_TASK_FORM_ERROR';
export const setAddTaskFormErrorAction: IReduxAction<
  string,
  typeof SET_ADD_TASK_FORM_ERROR
> = (payload) => ({
  type: SET_ADD_TASK_FORM_ERROR,
  payload,
});
setAddTaskFormErrorAction.type = SET_ADD_TASK_FORM_ERROR;

export const SET_ADD_TASK_FORM_INITIAL_VALUES =
  'SET_ADD_TASK_FORM_INITIAL_VALUES';
export const setAddTaskFormInitialValuesAction: IReduxAction<
  FormValues,
  typeof SET_ADD_TASK_FORM_INITIAL_VALUES
> = (payload) => ({
  type: SET_ADD_TASK_FORM_INITIAL_VALUES,
  payload,
});
setAddTaskFormInitialValuesAction.type = SET_ADD_TASK_FORM_INITIAL_VALUES;
