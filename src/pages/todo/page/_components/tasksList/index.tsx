import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { TaskCard } from '@/pages/todo/page/_components/tasksList/_components/taskCard';
import { TaskItemType } from '@/_redux/todo-tasks-module';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  tasks: TaskItemType[];
  handleRemove: (id: string) => void;
};

export const TasksList = memo(({ tasks, handleRemove }: PropsType) => {
  if (tasks.length === 0) {
    return <div>There is no tasks yet...</div>;
  }

  return (
    <div className={cn('wrapper')}>
      {tasks.map((task) => (
        <TaskCard key={task.id} handleRemove={handleRemove} task={task} />
      ))}
    </div>
  );
});
