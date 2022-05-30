import { IRequestParams } from '@mihanizm56/fetch-api';
import { ENDPOINT_FETCH_TASKS } from '@/api/endpoints/todoTasks/urls';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (abortRequestId?: string): IRequestParams => ({
  endpoint: ENDPOINT_FETCH_TASKS,
  translateFunction: requestTranslateFunction,
  responseSchema,
  abortRequestId,
  isErrorTextStraightToOutput: true,
});
