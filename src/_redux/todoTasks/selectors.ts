import { ITodoStatePart } from './types';
import { MODULE_REDUCER_NAME } from './constants';
import { initialState } from './reducer';

export const todoStorageSelector = (state: ITodoStatePart) =>
  state[MODULE_REDUCER_NAME] || initialState;

export const tasksSelector = (state: ITodoStatePart) =>
  state[MODULE_REDUCER_NAME]?.tasks || [];

export const isLoadingSelector = (state: ITodoStatePart) =>
  state[MODULE_REDUCER_NAME]?.isLoading || false;

export const errorSelector = (state: ITodoStatePart) =>
  state[MODULE_REDUCER_NAME]?.errors || [];
