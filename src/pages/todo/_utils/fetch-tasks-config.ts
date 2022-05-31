import { InitLoadManagerActionPayloadType } from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import { getTasksListRequest } from '@/api/requests/get-tasks-list';
import {
  setTasksAction,
  setTasksLoadingFinishAction,
  setTasksLoadingStartAction,
} from '@/_redux/todo-tasks-module';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';

const TITLE_MESSAGE_ERROR = i18next.t(
  TASKS_PAGE_TRANSLATIONS.fetchTasksErrorModalTitle,
);

export const fetchTasksConfig: InitLoadManagerActionPayloadType = {
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
