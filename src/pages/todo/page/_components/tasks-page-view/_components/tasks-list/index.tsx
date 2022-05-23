import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { ConnectedTaskCard } from '@/pages/todo/page/_components/tasks-page-view/_components/tasks-list/_components/task-card';
import { TaskItemType } from '@/_redux/todo-tasks-module';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  tasks: TaskItemType[];
};

export const TasksList = memo(({ tasks }: PropsType) => {
  // это можно сделать в одном ретурне через тернарный оператор
  if (tasks.length === 0) {
    return <div>There is no tasks yet...</div>;
  }

  return (
    <div className={cn('wrapper')}>
      {tasks.map((task) => (
        <ConnectedTaskCard key={task.id} task={task} />
      ))}
    </div>
  );
});
