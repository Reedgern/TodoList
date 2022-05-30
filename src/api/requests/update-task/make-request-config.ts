import { IRequestParams } from '@mihanizm56/fetch-api';
import { TaskItemType } from '@/_redux/todo-tasks-module';
import { ENDPOINT_UPDATE_TASK } from '@/api/endpoints/todoTasks/urls';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { responseSchema } from './response-schema';

export type UpdateTaskRequestType = TaskItemType & { abortRequestId?: string };

export const makeRequestConfig = (
  params: UpdateTaskRequestType,
): IRequestParams => ({
  endpoint: ENDPOINT_UPDATE_TASK,
  translateFunction: requestTranslateFunction,
  responseSchema,
  body: params,
  isErrorTextStraightToOutput: true,
});
