import { FormManagerType } from '@mihanizm56/redux-core-modules';
import { TaskItemType } from '@/_redux/todo-tasks-module';
import { FormValues } from '@/pages/todo/page/_redux/add-task-form-module';

export type StatePropsType = {
  tasks: Array<TaskItemType>;
  isLoading: boolean;
  addTaskFormInitialValues: FormValues;
  addTaskFormIsLoading: boolean;
};

export type DispatchPropsType = {
  fetchForm: (payload: FormManagerType) => void;
};
