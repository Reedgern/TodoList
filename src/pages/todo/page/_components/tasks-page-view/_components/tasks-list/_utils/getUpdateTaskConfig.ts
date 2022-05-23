import { FormManagerType } from '@mihanizm56/redux-core-modules';
import { updateTaskRequest } from '@/api/requests/update-task';
import {
  setTaskIsLoadingFinishAction,
  setTaskIsLoadingStartAction,
  updateTaskByIdAction,
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
}: UpdateTaskConfigParamsType): FormManagerType => ({
  formValues,
  formRequest: ({ body }) => updateTaskRequest({ ...body, id }),
  loadingStartAction: () => setTaskIsLoadingStartAction(id),
  loadingStopAction: () => setTaskIsLoadingFinishAction(id),
  showNotification: true,
  responseDataFormatter: (data) => data.updatedTask,
  formSuccessAction: () => updateTaskByIdAction({ ...formValues, id }),
  callBackOnSuccess,
  textMessageSuccess,
});
