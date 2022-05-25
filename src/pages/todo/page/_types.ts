import { FormManagerType } from '@mihanizm56/redux-core-modules';
import { TaskItemType } from '@/_redux/todo-tasks-module';
import { FormValues } from '@/pages/todo/page/_redux/add-task-form-module';

// не понятно по имени к чему относится тип
// если стейтов будет много в приложении то можно запутаться
export type StatePropsType = {
  tasks: Array<TaskItemType>;
  isLoading: boolean;
  formInitialValues: FormValues;
  formIsLoading: boolean;
};

// не понятно по имени к чему относится тип
// если mapDispatch будет много в приложении то можно запутаться
export type DispatchPropsType = {
  fetchForm: (payload: FormManagerType) => void;
};
