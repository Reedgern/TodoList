import { TaskItemType } from '@/_redux/todo-tasks-module';

export type updateTaskByIdParamsType = {
  tasks: Array<TaskItemType>;
  id: string;
} & Partial<TaskItemType>;

export const updateTaskById = ({
  tasks,
  id,
  ...taskFields
}: updateTaskByIdParamsType) => {
  return tasks.map((task) => {
    if (task.id !== id) {
      return task;
    }

    return {
      ...task,
      ...taskFields,
    };
  });
};
