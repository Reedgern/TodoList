import { InitLoadManagerActionPayloadType } from '@mihanizm56/redux-core-modules';
import { deleteTaskRequest } from '@/api/requests/delete-task';
import {
  deleteTaskSagaAction,
  setTaskIsLoadingFinishSagaAction,
  setTaskIsLoadingStartSagaAction,
} from '@/_redux/todo-tasks-module';

// про то как названы файлы я уже писал
const textMessageSuccess = 'Таска успешно удалена!';

// один параметр должен быть передан yt объектом
export const getDeleteTaskConfig = ({
  id,
}: {
  id: string;
}): InitLoadManagerActionPayloadType => {
  // пиши все утилиты через {} + return
  // роще бдет потом дополнять и отлаживаться

  return {
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
  };
};
