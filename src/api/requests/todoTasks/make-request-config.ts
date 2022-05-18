import { todoTasksEndpoint } from '@/api/endpoints/todoTasks';
import { responseSchema } from './responseSchema';

export const makeRequestConfig = ({
  endpoint,
  body,
  queryParams,
}: {
  endpoint: string;
  body?: any;
  queryParams?: any;
}) => ({
  endpoint: `${todoTasksEndpoint}/${endpoint}`,
  responseSchema,
  body,
  queryParams,
  isErrorTextStraightToOutput: true,
  headers: {
    'X-User-Id': '2',
  },
});
