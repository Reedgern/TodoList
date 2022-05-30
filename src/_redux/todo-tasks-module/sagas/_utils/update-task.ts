import { TaskItemType } from '@/_redux/todo-tasks-module';

type ParamsType = {
  tasks: Array<TaskItemType>;
  id: string;
} & Partial<TaskItemType>;

export const updateTask = ({
  tasks,
  id,
  ...taskNewParams
}: ParamsType): TaskItemType[] => {
  return tasks.map((taskParams) => {
    if (taskParams.id !== id) {
      return taskParams;
    }

    return {
      ...taskParams,
      ...taskNewParams,
    };
  });
};
