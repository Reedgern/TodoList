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

    // тут можешь получить неприятную багу когда случайно поменяешь местами task и taskFields
    // чтобы от этого защититься - надо явно передать айдишник и остальные поля - и уже их явно записать
    // например
    // return newTaskData

    return {
      ...task,
      ...taskFields,
    };
  });
};
