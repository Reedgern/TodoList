import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import {
  DeleteTaskRequestType,
  makeRequestConfig,
} from '@/api/requests/delete-task/make-request-config';

export const deleteTaskRequest = (
  params: DeleteTaskRequestType,
): Promise<IResponse> =>
  new RestRequest().deleteRequest(makeRequestConfig(params));
