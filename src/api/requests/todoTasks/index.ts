import { IResponse, PureRestRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig } from '@/api/requests/todoTasks/make-request-config';

export const getTodoTasksRequest = (): Promise<IResponse> =>
  new PureRestRequest().getRequest(makeRequestConfig({ endpoint: 'get' }));

export const createTaskRequest = ({
  description,
  isCompleted,
}): Promise<IResponse> =>
  new PureRestRequest().postRequest(
    makeRequestConfig({
      endpoint: 'create',
      body: { description, isCompleted },
    }),
  );

export const deleteTaskRequest = ({ id }): Promise<IResponse> =>
  new PureRestRequest().postRequest(
    makeRequestConfig({ endpoint: 'delete', body: { id } }),
  );

export const updateTaskRequest = ({
  id,
  description,
  isCompleted,
}): Promise<IResponse> =>
  new PureRestRequest().postRequest(
    makeRequestConfig({
      endpoint: 'update',
      body: { id, description, isCompleted },
    }),
  );
