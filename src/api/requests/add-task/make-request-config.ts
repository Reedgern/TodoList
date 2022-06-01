import { IRequestParams } from '@mihanizm56/fetch-api';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { TASKS_ENDPOINT } from '@/api/endpoints';
import { responseSchema } from './response-schema';

export type AddTaskRequestType = {
  description: string;
  isCompleted: boolean;
  abortRequestId?: string;
};

export const makeRequestConfig = ({
  abortRequestId,
  ...params
}: AddTaskRequestType): IRequestParams => ({
  endpoint: TASKS_ENDPOINT,
  responseSchema,
  translateFunction: requestTranslateFunction,
  body: params,
  abortRequestId,
  isErrorTextStraightToOutput: true,
});
