import { InitLoadManagerActionPayloadType } from '@mihanizm56/redux-core-modules';
import { deleteTaskRequest } from '@/api/requests/delete-task';
import {
  deleteTaskSagaAction,
  setTaskIsLoadingFinishSagaAction,
  setTaskIsLoadingStartSagaAction,
} from '@/_redux/todo-tasks-module';

const textMessageSuccess = 'Таска успешно удалена!';

export const getDeleteTaskConfig = ({
  id,
}: {
  id: string;
}): InitLoadManagerActionPayloadType => ({
  requestConfigList: [
    {
      request: deleteTaskRequest,
      requestOptions: { id },
      showErrorNotification: true,
      showSuccessNotification: true,
      textMessageSuccess,
      loadingStartAction: () => setTaskIsLoadingStartSagaAction(id),
      loadingStopAction: () => setTaskIsLoadingFinishSagaAction(id),
      actionSuccess: () => deleteTaskSagaAction(id),
    },
  ],
});
