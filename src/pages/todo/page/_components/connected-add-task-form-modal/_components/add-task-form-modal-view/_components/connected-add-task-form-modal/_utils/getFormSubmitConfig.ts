import {
  FormManagerType,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import {
  setAddTaskFormLoadingFinishAction,
  setAddTaskFormLoadingStartAction,
} from '@/pages/todo/_redux/add-task-form-module';
import { addTaskRequest } from '@/api/requests/add-task';
import { closeModalAction } from '@/_redux/todo-tasks-module';
import { getFetchTasksConfig } from '@/pages/todo/_utils/get-fetch-tasks-config';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';

const TITLE_MESSAGE_ERROR = i18next.t(
  TASKS_PAGE_TRANSLATIONS.formSubmitErrorModalTitle,
);

export const getFormSubmitConfig = (values): FormManagerType => {
  return {
    formValues: values,
    showNotification: true,
    titleMessageError: TITLE_MESSAGE_ERROR,
    loadingStartAction: setAddTaskFormLoadingStartAction,
    loadingStopAction: setAddTaskFormLoadingFinishAction,
    formRequest: ({ body }) => addTaskRequest(body),
    formSuccessActionsArray: [
      closeModalAction,
      () => initLoadManagerActionSaga(getFetchTasksConfig()),
    ],
  };
};
