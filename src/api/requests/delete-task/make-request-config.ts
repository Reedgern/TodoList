import { IRequestParams } from '@mihanizm56/fetch-api';
import { ENDPOINT_DELETE_TASK } from '@/api/endpoints/todoTasks/urls';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { responseSchema } from './response-schema';

export type DeleteTaskRequestType = {
  id: string;
  abortRequestId?: string;
};

export const makeRequestConfig = ({
  abortRequestId,
  ...params
}: DeleteTaskRequestType): IRequestParams => ({
  endpoint: ENDPOINT_DELETE_TASK,
  responseSchema,
  translateFunction: requestTranslateFunction,
  body: params,
  abortRequestId,
  isErrorTextStraightToOutput: true,
});
