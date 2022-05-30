import { TaskItemType } from '@/_redux/todo-tasks-module';

type ParamsType = {
  tasks: TaskItemType[];
  id: string;
};

export const deleteTask = ({ tasks, id }: ParamsType): TaskItemType[] => {
  return tasks.filter((task) => task.id !== id);
};
