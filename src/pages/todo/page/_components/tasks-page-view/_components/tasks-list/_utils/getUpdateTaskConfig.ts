import { FormManagerType } from '@mihanizm56/redux-core-modules';
import { updateTaskRequest } from '@/api/requests/update-task';
import {
  setTaskIsLoadingFinishSagaAction,
  setTaskIsLoadingStartSagaAction,
  updateTaskSagaAction,
} from '@/_redux/todo-tasks-module';
import { FormValues } from '@/pages/todo/page/_redux/add-task-form-module';

const textMessageSuccess = 'Таска успешно изменена!';

export type UpdateTaskConfigParamsType = {
  formValues: FormValues;
  id: string;
  callBackOnSuccess: FormManagerType['callBackOnSuccess'];
};

export const getUpdateTaskConfig = ({
  formValues,
  id,
  callBackOnSuccess,
}: UpdateTaskConfigParamsType): FormManagerType => {
  return {
    // сделай чтобы показывалась всплывашка при неудачном запросе
    formValues,
    formRequest: ({ body }) => updateTaskRequest({ ...body, id }),
    loadingStartAction: () => setTaskIsLoadingStartSagaAction(id),
    loadingStopAction: () => setTaskIsLoadingFinishSagaAction(id),
    showNotification: true,
    responseDataFormatter: (data) => data.updatedTask,
    formSuccessAction: () => updateTaskSagaAction({ ...formValues, id }),
    callBackOnSuccess,
    textMessageSuccess,
  };
};
