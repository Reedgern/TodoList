import { ADD_TASK_FORM_REDUCER_NAME } from '@/pages/todo/_redux/add-task-form-module/_constants';
import { AddTaskFormValuesType } from '@/pages/todo/page/_components/task-form/_types';

export type AddTaskFormStorageType = {
  isLoading: boolean;
  error: string;
  initialValues: AddTaskFormValuesType;
};

export type AddTaskFormStorageTypePart = {
  [ADD_TASK_FORM_REDUCER_NAME]: AddTaskFormStorageType;
};
