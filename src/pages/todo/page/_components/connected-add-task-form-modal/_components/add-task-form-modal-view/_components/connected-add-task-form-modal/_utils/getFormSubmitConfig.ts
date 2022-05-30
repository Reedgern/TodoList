import {
  FormManagerType,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import {
  setAddTaskFormLoadingFinishAction,
  setAddTaskFormLoadingStartAction,
} from '@/pages/todo/_redux/add-task-form-module';
import { addTaskRequest } from '@/api/requests/add-task';
import { closeModalAction } from '@/_redux/todo-tasks-module';
import { getFetchTasksConfig } from '@/pages/todo/_utils/get-fetch-tasks-config';

const TITLE_MESSAGE_ERROR = 'Ошибка отправки формы';

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
