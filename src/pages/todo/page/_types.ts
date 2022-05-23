import { FormManagerType } from '@mihanizm56/redux-core-modules';
import {
  AddTaskSagaActionPayloadType,
  TaskItemType,
} from '@/_redux/todo-tasks-module';
import { FormValues } from '@/pages/todo/page/_redux/add-task-form-module';

export type StatePropsType = {
  tasks: Array<TaskItemType>;
  isLoading: boolean;
  addTaskFormInitialValues: FormValues;
  addTaskFormIsLoading: boolean;
};

export type DispatchPropsType = {
  addNewTask: (payload: AddTaskSagaActionPayloadType) => void;
  fetchForm: (payload: FormManagerType) => void;
};
