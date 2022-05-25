import { todoTasksEndpoint } from '@/api/endpoints/todoTasks';
import { responseSchema } from './response-schema';

export type AddTaskRequestType = {
  description: string;
  isCompleted: boolean;
};

export const makeRequestConfig = (params: AddTaskRequestType) => ({
  // вынести в папку с endpoints чтобы переиспользовать
  endpoint: `${todoTasksEndpoint}/create`,
  responseSchema,
  body: params,
  isErrorTextStraightToOutput: true,
  // зачем?
  headers: {
    'X-User-Id': '2',
  },
});
