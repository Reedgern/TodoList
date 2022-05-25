import { ENDPOINT_FETCH_TASKS } from '@/api/endpoints/todoTasks/urls';
import { responseSchema } from './response-schema';

export const makeRequestConfig = () => ({
  endpoint: ENDPOINT_FETCH_TASKS,
  responseSchema,
  isErrorTextStraightToOutput: true,
});
