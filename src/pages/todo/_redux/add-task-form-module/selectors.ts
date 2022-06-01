import { createSelector } from 'reselect';
import { AddTaskFormStorageType, AddTaskFormStorageTypePart } from './_types';
import { ADD_TASK_FORM_REDUCER_NAME } from './_constants';
import { initialState } from './reducer';

export const addTaskFormStorageSelector = (state: AddTaskFormStorageTypePart) =>
  state[ADD_TASK_FORM_REDUCER_NAME] || initialState;

export const addTaskFormInitialValuesSelector = createSelector(
  [addTaskFormStorageSelector],
  ({ initialValues }: AddTaskFormStorageType) => initialValues,
);

export const addTaskFormIsLoadingSelector = createSelector(
  [addTaskFormStorageSelector],
  ({ isLoading }: AddTaskFormStorageType) => isLoading,
);
