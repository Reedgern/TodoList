import { ENDPOINT_DELETE_TASK } from '@/api/endpoints/todoTasks/urls';
import { responseSchema } from './response-schema';

export type DeleteTaskRequestType = {
  id: string;
};

export const makeRequestConfig = (params: DeleteTaskRequestType) => ({
  endpoint: ENDPOINT_DELETE_TASK,
  responseSchema,
  body: params,
  isErrorTextStraightToOutput: true,
});
