import { todoTasksEndpoint } from '@/api/endpoints/todoTasks';
import { responseSchema } from './response-schema';

export type AddTaskRequestType = {
  description: string;
  isCompleted: boolean;
};

export const makeRequestConfig = (params: AddTaskRequestType) => ({
  endpoint: `${todoTasksEndpoint}/create`,
  responseSchema,
  body: params,
  isErrorTextStraightToOutput: true,
  headers: {
    'X-User-Id': '2',
  },
});
