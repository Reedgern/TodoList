import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Preloader, Text } from '@wildberries/ui-kit';
import { ConnectedTaskList } from '@/pages/todo/page/_components/tasks-page-view/_components/tasks-list';
import { TaskForm } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form';
import { TaskItemType } from '@/_redux/todo-tasks-module';
import { FormSubmitCallbackType } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/_types';
import { FormValues } from '@/pages/todo/page/_redux/add-task-form-module';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  addTaskFormIsLoading: boolean;
  addTaskFormInitialValues: FormValues;
  isLoading: boolean;
  tasks: Array<TaskItemType>;
  onFormSubmit: FormSubmitCallbackType;
};

export const TasksPageView = memo(
  ({
    isLoading,
    tasks,
    onFormSubmit,
    addTaskFormIsLoading,
    addTaskFormInitialValues,
  }: PropsType) => {
    return (
      // - не соответствует BEM
      // - посмотри как с помощью библиотеки classnames организовать именование
      // - каждый элемент блока/блок должен иметь класс
      <div className={cn('wrapper')}>
        <div>
          {isLoading ? (
            <Preloader size="medium" />
          ) : (
            <ConnectedTaskList tasks={tasks} />
          )}
        </div>
        <div>
          {/* все тексты вынести в какой то объект */}
          <Text text="Форма для новой таски:" />
          <TaskForm
            initialValues={addTaskFormInitialValues}
            isLoading={addTaskFormIsLoading}
            onSubmit={onFormSubmit}
          />
        </div>
      </div>
    );
  },
);
