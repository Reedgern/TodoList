import { TaskItemType } from '@/pages/todo/_types';

type ParamsType = {
  tasks: TaskItemType[];
  id: string;
};

export const deleteTask = ({ tasks, id }: ParamsType): TaskItemType[] => {
  return tasks.filter((task) => task.id !== id);
};
