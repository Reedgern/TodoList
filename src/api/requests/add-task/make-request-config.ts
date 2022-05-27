import { IRequestParams } from '@mihanizm56/fetch-api';
import { ENDPOINT_ADD_TASK } from '@/api/endpoints/todoTasks/urls';
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
  endpoint: ENDPOINT_ADD_TASK,
  responseSchema,
  body: params,
  abortRequestId,
  isErrorTextStraightToOutput: true,
});
