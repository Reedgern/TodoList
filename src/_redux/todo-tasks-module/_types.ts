import { TASKS_REDUCER_NAME } from './constants';

export type SetTaskActionPayloadType = Array<TaskItemType>;

export type UpdateTaskSagaActionPayloadType = TaskItemType;

export type TaskItemType = {
  id: string;
  description: string;
  isCompleted: boolean;
  isLoading?: boolean;
  isEditMode?: boolean;
};

export type TasksStorageType = {
  tasks: Array<TaskItemType>;
  isLoading: boolean;
  modalIsOpened: boolean;
};

export type TaskStoragePartType = {
  [TASKS_REDUCER_NAME]: TasksStorageType;
};
