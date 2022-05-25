import { InitLoadManagerActionPayloadType } from '@mihanizm56/redux-core-modules';
import { deleteTaskRequest } from '@/api/requests/delete-task';
import {
  deleteTaskSagaAction,
  updateTaskSagaAction,
} from '@/_redux/todo-tasks-module';

const textMessageSuccess = 'Таска успешно удалена!';

export const getDeleteTaskConfig = (
  id: string,
): InitLoadManagerActionPayloadType => {
  return {
    requestConfigList: [
      {
        request: deleteTaskRequest,
        requestOptions: { id },
        showErrorNotification: true,
        showSuccessNotification: true,
        textMessageSuccess,
        loadingStartAction: () => updateTaskSagaAction({ id, isLoading: true }),
        loadingStopAction: () => updateTaskSagaAction({ id, isLoading: false }),
        actionSuccess: () => deleteTaskSagaAction(id),
      },
    ],
  };
};
