import { IResponse, PureRestRequest } from '@mihanizm56/fetch-api';
import {
  AddTaskRequestType,
  makeRequestConfig,
} from '@/api/requests/add-task/make-request-config';

export const addTaskRequest = (
  params: AddTaskRequestType,
): Promise<IResponse> =>
  new PureRestRequest().postRequest(makeRequestConfig(params));
