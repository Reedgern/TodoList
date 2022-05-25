import { IRequestParams } from '@mihanizm56/fetch-api';
import { todoTasksEndpoint } from '@/api/endpoints/todoTasks';
import { TaskItemType } from '@/_redux/todo-tasks-module';
import { responseSchema } from './response-schema';

export type UpdateTaskRequestType = TaskItemType;

export const makeRequestConfig = (
  params: UpdateTaskRequestType,
): IRequestParams => ({
  // вынести в папку с endpoints чтобы переиспользовать
  endpoint: `${todoTasksEndpoint}/update`,
  responseSchema,
  body: params,
  isErrorTextStraightToOutput: true,
  // зачем?
  headers: {
    'X-User-Id': '2',
  },
});
