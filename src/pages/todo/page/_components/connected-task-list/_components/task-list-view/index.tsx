import React, { memo } from 'react';
import { Preloader, Text } from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import i18next from 'i18next';
import { TaskCard } from '@/pages/todo/page/_components/connected-task-list/_components/task-list-view/_components/task-card';
import { TaskItemType } from '@/_redux/todo-tasks-module';
import { AddTaskFormValuesType } from '@/pages/todo/page/_components/task-form/_types';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';
import styles from './index.module.scss';

type PropsType = {
  isLoading: boolean;
  tasks: Array<TaskItemType>;
  onDeleteTask: (id: string) => void;
  onCancelEditTask: (id: string) => void;
  onEditTask: (id: string) => void;
  onUpdateTask: (values: AddTaskFormValuesType & { id: string }) => void;
};

const BLOCK_NAME = 'Task-list-view';
const cn = classnames.bind(styles);

export const TaskListView = memo(
  ({
    isLoading,
    tasks,
    onUpdateTask,
    onDeleteTask,
    onEditTask,
    onCancelEditTask,
  }: PropsType) => {
    if (isLoading) {
      return (
        <div className={cn(BLOCK_NAME)}>
          <Preloader size="large" />
        </div>
      );
    }

    return (
      <div className={cn(BLOCK_NAME)}>
        {tasks.length === 0 ? (
          <Text text={i18next.t(TASKS_PAGE_TRANSLATIONS.noTasksMessage)} />
        ) : (
          <ul className={`${BLOCK_NAME}__list`}>
            {tasks.map((task) => (
              <li key={task.id} className={cn(`${BLOCK_NAME}__list-item`)}>
                <TaskCard
                  description={task.description}
                  id={task.id}
                  isCompleted={task.isCompleted}
                  isEditMode={task.isEditMode}
                  isLoading={task.isLoading}
                  onCancel={onCancelEditTask}
                  onDelete={onDeleteTask}
                  onEdit={onEditTask}
                  onUpdate={onUpdateTask}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  },
);
