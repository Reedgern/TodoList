import { IRequestParams } from '@mihanizm56/fetch-api';
import { ENDPOINT_FETCH_TASKS } from '@/api/endpoints/todoTasks/urls';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (abortRequestId?: string): IRequestParams => ({
  endpoint: ENDPOINT_FETCH_TASKS,
  responseSchema,
  abortRequestId,
  isErrorTextStraightToOutput: true,
});
