// action payload types

import { ADD_TASK_FORM_REDUCER_NAME } from '@/pages/todo/page/_redux/add-task-form-module/constants';

export type FormValues = {
  description: string;
  isCompleted: boolean;
};

export type AddTaskFormStorageType = {
  isLoading: boolean;
  error: string;
  initialValues: FormValues;
};

export type AddTaskFormStorageTypePart = {
  [ADD_TASK_FORM_REDUCER_NAME]: AddTaskFormStorageType;
};
