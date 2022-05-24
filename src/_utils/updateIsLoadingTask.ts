import { TaskItemType } from '@/_redux/todo-tasks-module';

export type UpdateIsLoadingTaskParamsType = {
  tasks: Array<TaskItemType>;
  id: string;
  isLoading: boolean;
};

export const updateIsLoadingTask = ({
  tasks,
  id,
  isLoading,
}: UpdateIsLoadingTaskParamsType) => {
  return tasks.map((task) => {
    if (task.id !== id) {
      return task;
    }

    return {
      ...task,
      isLoading,
    };
  });
};
