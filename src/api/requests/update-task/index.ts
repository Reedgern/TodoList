import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import {
  makeRequestConfig,
  UpdateTaskRequestType,
} from '@/api/requests/update-task/make-request-config';

export const updateTaskRequest = (
  params: UpdateTaskRequestType,
): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(params));
