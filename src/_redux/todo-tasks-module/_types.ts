import { TaskItemType } from '@/pages/todo/_types';
import { TASKS_REDUCER_NAME } from './constants';

export type SetTaskActionPayloadType = Array<TaskItemType>;

export type TasksStorageType = {
  tasks: Array<TaskItemType>;
  isLoading: boolean;
  isModalOpened: boolean;
};

export type TaskStoragePartType = {
  [TASKS_REDUCER_NAME]: TasksStorageType;
};
