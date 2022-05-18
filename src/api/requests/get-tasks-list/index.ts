import { IResponse, PureRestRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig } from '@/api/requests/get-tasks-list/make-request-config';

export const getTasksListRequest = (): Promise<IResponse> =>
  new PureRestRequest().getRequest(makeRequestConfig());
