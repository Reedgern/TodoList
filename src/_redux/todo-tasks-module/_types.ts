import { TASKS_REDUCER_NAME } from './constants';

// action payload types

export type SetTaskActionPayloadType = Array<TaskItemType>;

export type AddTaskSagaActionPayloadType = {
  description: string;
  isCompleted: boolean;
};

export type TaskItemType = {
  id: string;
  description: string;
  isCompleted: boolean;
  isLoading?: boolean;
};

export type TasksStorageType = {
  tasks: Array<TaskItemType>;
  isLoading: boolean;
};

export type TaskStoragePartType = {
  [TASKS_REDUCER_NAME]: TasksStorageType;
};
