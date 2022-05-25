import { todoTasksEndpoint } from '@/api/endpoints/todoTasks';
import { responseSchema } from './response-schema';

export const makeRequestConfig = () => ({
  // вынести в папку с endpoints чтобы переиспользовать
  endpoint: `${todoTasksEndpoint}/get`,
  responseSchema,
  isErrorTextStraightToOutput: true,
  // зачем?
  headers: {
    'X-User-Id': '2',
  },
});
