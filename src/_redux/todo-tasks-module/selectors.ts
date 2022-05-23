import { createSelector } from 'reselect';
import { TasksStorageType, TaskStoragePartType } from './_types';
import { TASKS_REDUCER_NAME } from './constants';
import { initialState } from './reducer';

export const tasksStorageSelector = (state: TaskStoragePartType) =>
  state[TASKS_REDUCER_NAME] || initialState;

export const tasksSelector = createSelector(
  [tasksStorageSelector],
  ({ tasks }: TasksStorageType) => tasks,
);

export const isLoadingSelector = createSelector(
  [tasksStorageSelector],
  ({ isLoading }: TasksStorageType) => isLoading,
);
