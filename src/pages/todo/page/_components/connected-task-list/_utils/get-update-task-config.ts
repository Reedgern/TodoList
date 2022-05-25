import { FormManagerType } from '@mihanizm56/redux-core-modules';
import { updateTaskRequest } from '@/api/requests/update-task';
import { updateTaskSagaAction } from '@/_redux/todo-tasks-module';
import { FormValuesType } from '@/pages/todo/page/_components/task-form/_types';

const textMessageSuccess = 'Таска успешно изменена!';

export type UpdateTaskConfigParamsType = {
  formValues: FormValuesType;
  id: string;
};

export const getUpdateTaskConfig = ({
  formValues,
  id,
}: UpdateTaskConfigParamsType): FormManagerType => {
  return {
    formValues,
    formRequest: ({ body }) => updateTaskRequest({ ...body, id }),
    loadingStartAction: () => updateTaskSagaAction({ id, isLoading: true }),
    loadingStopAction: () => updateTaskSagaAction({ id, isLoading: false }),
    showNotification: true,
    responseDataFormatter: (data) => data.updatedTask,
    formSuccessAction: () =>
      updateTaskSagaAction({ ...formValues, id, isEditMode: false }),
    textMessageSuccess,
  };
};
