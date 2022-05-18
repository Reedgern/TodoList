import { todoTasksEndpoint } from '@/api/endpoints/todoTasks';
import { responseSchema } from './responseSchema';

export type DeleteTaskRequestType = string;

export const makeRequestConfig = (id: string) => ({
  endpoint: `${todoTasksEndpoint}/delete`,
  responseSchema,
  body: { id },
  isErrorTextStraightToOutput: true,
  headers: {
    'X-User-Id': '2',
  },
});
