import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import {
  makeRequestConfig,
  RequestParamsType,
} from '@/api/requests/update-task/make-request-config';

export const updateTaskRequest = (
  params: RequestParamsType,
): Promise<IResponse> =>
  new RestRequest().putRequest(makeRequestConfig(params));
