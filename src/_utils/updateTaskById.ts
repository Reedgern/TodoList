import { TaskItemType } from '@/_redux/todo-tasks-module';

export type updateTaskByIdParamsType = {
  tasks: Array<TaskItemType>;
  id: string;
  description: string;
  isCompleted: boolean;
};

export const updateTaskById = ({
  tasks,
  id,
  description,
  isCompleted,
}: updateTaskByIdParamsType) => {
  return tasks.map((task) => {
    if (task.id !== id) {
      return task;
    }

    return {
      ...task,
      description,
      isCompleted,
    };
  });
};
