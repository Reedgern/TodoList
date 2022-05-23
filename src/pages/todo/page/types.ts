import { FormManagerType } from '@mihanizm56/redux-core-modules';
import {
  AddTaskSagaActionPayloadType,
  TaskItemType,
} from '@/_redux/todo-tasks-module';

export type StatePropsType = {
  tasks: Array<TaskItemType>;
  isLoading: boolean;
  errors: string[];
  addTaskFormIsLoading: boolean;
};

export type DispatchPropsType = {
  addNewTask: (payload: AddTaskSagaActionPayloadType) => void;
  fetchForm: (payload: FormManagerType) => void;
};

// файл называем _types.ts
// см ридми проекта по структуре и именованиям
