import { IRequestParams } from '@mihanizm56/fetch-api';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { TASKS_ENDPOINT } from '@/api/endpoints';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (abortRequestId?: string): IRequestParams => ({
  endpoint: TASKS_ENDPOINT,
  translateFunction: requestTranslateFunction,
  responseSchema,
  abortRequestId,
  isErrorTextStraightToOutput: true,
});
