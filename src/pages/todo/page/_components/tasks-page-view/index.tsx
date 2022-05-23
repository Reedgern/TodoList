import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Preloader } from '@wildberries/ui-kit';
import { TasksList } from '@/pages/todo/page/_components/tasks-page-view/_components/tasks-list';
import { TaskForm } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form';
import { TaskItemType } from '@/_redux/todo-tasks-module';
import { ErrorsList } from '@/pages/todo/page/_components/tasks-page-view/_components/errors-list';
import { FormSubmitCallbackType } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/types';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  addTaskFormIsLoading: boolean;
  isLoading: boolean;
  errors: string[];
  tasks: Array<TaskItemType>;
  formHandleSubmit: FormSubmitCallbackType;
};

export const TasksPageView = memo(
  ({
    isLoading,
    tasks,
    errors,
    formHandleSubmit,
    addTaskFormIsLoading,
  }: PropsType) => {
    return (
      // - не соответствует BEM
      // - посмотри как с помощью библиотеки classnames организовать именование
      // - каждый элемент блока/блок должен иметь класс
      <div className={cn('wrapper')}>
        <div>
          <ErrorsList errors={errors} />

          {isLoading ? (
            <Preloader size="medium" />
          ) : (
            <TasksList tasks={tasks} />
          )}
        </div>
        <div>
          {/* все тексты вынести в какой то объект */}
          <h2>Создать новую таску:</h2>
          <TaskForm
            isLoading={addTaskFormIsLoading}
            onSubmit={formHandleSubmit}
          />
        </div>
      </div>
    );
  },
);
