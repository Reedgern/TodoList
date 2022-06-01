import { IRequestParams } from '@mihanizm56/fetch-api';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { TASKS_ENDPOINT } from '@/api/endpoints';
import { responseSchema } from './response-schema';

export type DeleteTaskRequestType = {
  id: string;
  abortRequestId?: string;
};

export const makeRequestConfig = ({
  abortRequestId,
  ...params
}: DeleteTaskRequestType): IRequestParams => ({
  endpoint: TASKS_ENDPOINT,
  responseSchema,
  translateFunction: requestTranslateFunction,
  body: params,
  abortRequestId,
  isErrorTextStraightToOutput: true,
});
