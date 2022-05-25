import { ENDPOINT_ADD_TASK } from '@/api/endpoints/todoTasks/urls';
import { responseSchema } from './response-schema';

export type AddTaskRequestType = {
  description: string;
  isCompleted: boolean;
};

export const makeRequestConfig = (params: AddTaskRequestType) => ({
  endpoint: ENDPOINT_ADD_TASK,
  responseSchema,
  body: params,
  isErrorTextStraightToOutput: true,
});
