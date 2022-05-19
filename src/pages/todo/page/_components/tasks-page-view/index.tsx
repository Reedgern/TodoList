import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { TasksList } from '@/pages/todo/page/_components/tasks-page-view/_components/tasks-list';
import { TaskForm } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form';
import { TaskItemType } from '@/_redux/todo-tasks-module';
import { ErrorsList } from '@/pages/todo/page/_components/tasks-page-view/_components/errors-list';
import { Preloader } from '@/pages/todo/page/_components/tasks-page-view/_components/preloader';
import { FormSubmitCallbackType } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/types';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  isLoading: boolean;
  errors: string[];
  tasks: Array<TaskItemType>;
  formHandleSubmit: FormSubmitCallbackType;
};

export const TasksPageView = memo(
  ({ isLoading, tasks, errors, formHandleSubmit }: PropsType) => {
    return (
      <div className={cn('wrapper')}>
        <div>
          <ErrorsList errors={errors} />
          {isLoading ? <Preloader /> : <TasksList tasks={tasks} />}
        </div>
        <div>
          <h2>Создать новую таску:</h2>
          <TaskForm onSubmit={formHandleSubmit} />
        </div>
      </div>
    );
  },
);
