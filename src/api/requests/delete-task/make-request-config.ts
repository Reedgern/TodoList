import { todoTasksEndpoint } from '@/api/endpoints/todoTasks';
import { responseSchema } from './response-schema';

export type DeleteTaskRequestType = {
  id: string;
};

export const makeRequestConfig = (params: DeleteTaskRequestType) => ({
  endpoint: `${todoTasksEndpoint}/delete`,
  responseSchema,
  body: params,
  isErrorTextStraightToOutput: true,
  headers: {
    'X-User-Id': '2',
  },
});
