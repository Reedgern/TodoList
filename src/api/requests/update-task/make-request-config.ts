import { IRequestParams } from '@mihanizm56/fetch-api';
import { TaskItemType } from '@/_redux/todo-tasks-module';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { TASKS_ENDPOINT } from '@/api/endpoints';
import { responseSchema } from './response-schema';

export type RequestParamsType = TaskItemType & { abortRequestId?: string };

export const makeRequestConfig = (
  params: RequestParamsType,
): IRequestParams => ({
  endpoint: TASKS_ENDPOINT,
  translateFunction: requestTranslateFunction,
  responseSchema,
  body: params,
  isErrorTextStraightToOutput: true,
});
