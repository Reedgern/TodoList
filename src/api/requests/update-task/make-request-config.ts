import { IRequestParams } from '@mihanizm56/fetch-api';
import { TaskItemType } from '@/_redux/todo-tasks-module';
import { ENDPOINT_UPDATE_TASK } from '@/api/endpoints/todoTasks/urls';
import { responseSchema } from './response-schema';

export type UpdateTaskRequestType = TaskItemType;

export const makeRequestConfig = (
  params: UpdateTaskRequestType,
): IRequestParams => ({
  endpoint: ENDPOINT_UPDATE_TASK,
  responseSchema,
  body: params,
  isErrorTextStraightToOutput: true,
});
