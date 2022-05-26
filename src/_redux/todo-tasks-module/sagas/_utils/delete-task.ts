import { TaskItemType } from '@/_redux/todo-tasks-module';

type ParamsType = {
  tasks: Array<TaskItemType>;
  id: string;
};

export const deleteTask = ({ tasks, id }: ParamsType) => {
  return tasks.filter((task) => task.id !== id);
};
