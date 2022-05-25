import { todoTasksEndpoint } from '@/api/endpoints/todoTasks';
import { responseSchema } from './response-schema';

export type DeleteTaskRequestType = {
  id: string;
};

export const makeRequestConfig = (params: DeleteTaskRequestType) => ({
  // вынести в папку с endpoints чтобы переиспользовать
  endpoint: `${todoTasksEndpoint}/delete`,
  responseSchema,
  body: params,
  isErrorTextStraightToOutput: true,
  // зачем?
  headers: {
    'X-User-Id': '2',
  },
});
