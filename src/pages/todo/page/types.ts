import {
  AddTaskSagaActionPayloadType,
  TaskItemType,
} from '@/_redux/todo-tasks-module';

export type StatePropsType = {
  tasks: Array<TaskItemType>;
  isLoading: boolean;
  errors: string[];
};

export type DispatchPropsType = {
  addNewTask: (payload: AddTaskSagaActionPayloadType) => void;
};
