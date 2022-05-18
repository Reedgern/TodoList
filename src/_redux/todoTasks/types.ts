import { MODULE_REDUCER_NAME } from './constants';

export interface ITask {
  id: string;
  description: string;
  isCompleted: boolean;
}

export interface ITodoState {
  tasks: Array<ITask> | null;
  isLoading: boolean;
  errors: string[] | null;
}

export interface ITodoStatePart {
  [MODULE_REDUCER_NAME]: ITodoState;
}
