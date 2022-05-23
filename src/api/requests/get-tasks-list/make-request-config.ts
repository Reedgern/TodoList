import { todoTasksEndpoint } from '@/api/endpoints/todoTasks';
import { responseSchema } from './response-schema';

export const makeRequestConfig = () => ({
  endpoint: `${todoTasksEndpoint}/get`,
  responseSchema,
  isErrorTextStraightToOutput: true,
  headers: {
    'X-User-Id': '2',
  },
});
