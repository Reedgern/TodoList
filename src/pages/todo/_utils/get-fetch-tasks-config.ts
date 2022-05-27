import { InitLoadManagerActionPayloadType } from '@mihanizm56/redux-core-modules';
import { getTasksListRequest } from '@/api/requests/get-tasks-list';
import {
  setTasksAction,
  setTasksLoadingFinishAction,
  setTasksLoadingStartAction,
} from '@/_redux/todo-tasks-module';

const TITLE_MESSAGE_ERROR = 'Ошибка получения данных';

export const getFetchTasksConfig = (): InitLoadManagerActionPayloadType => {
  return {
    requestConfigList: [
      {
        request: getTasksListRequest,
        loadingStartAction: setTasksLoadingStartAction,
        loadingStopAction: setTasksLoadingFinishAction,
        responseDataFormatter: (data) => data.tasks,
        actionSuccess: setTasksAction,
        titleMessageError: TITLE_MESSAGE_ERROR,
        showErrorNotification: true,
        errorAction: () => setTasksAction([]),
      },
    ],
  };
};
