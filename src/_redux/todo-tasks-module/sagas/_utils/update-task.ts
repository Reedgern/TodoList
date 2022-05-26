import { TaskItemType } from '@/_redux/todo-tasks-module';

type ParamsType = {
  tasks: Array<TaskItemType>;
  id: string;
} & Partial<TaskItemType>;

export const updateTask = ({ tasks, id, ...taskFields }: ParamsType) => {
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
