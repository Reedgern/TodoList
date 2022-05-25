import { IReduxAction, IReduxBaseAction } from '@mihanizm56/redux-core-modules';
import { FormValuesType } from '@/pages/todo/page/_components/task-form/_types';

export const SET_LOADING_START = 'SET_LOADING_START';
export const setAddTaskFormLoadingStartAction: IReduxBaseAction<
  typeof SET_LOADING_START
> = () => ({
  type: SET_LOADING_START,
});
setAddTaskFormLoadingStartAction.type = SET_LOADING_START;

export const SET_LOADING_FINISH = 'SET_LOADING_FINISH';
export const setAddTaskFormLoadingFinishAction: IReduxBaseAction<
  typeof SET_LOADING_FINISH
> = () => ({
  type: SET_LOADING_FINISH,
});
setAddTaskFormLoadingFinishAction.type = SET_LOADING_FINISH;

export const SET_INITIAL_VALUES = 'SET_INITIAL_VALUES';
export const setAddTaskFormInitialValuesAction: IReduxAction<
  FormValuesType,
  typeof SET_INITIAL_VALUES
> = (payload) => ({
  type: SET_INITIAL_VALUES,
  payload,
});
setAddTaskFormInitialValuesAction.type = SET_INITIAL_VALUES;
