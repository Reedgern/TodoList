import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import { ConnectedTaskList } from '@/pages/todo/page/_components/tasks-page-view/_components/tasks-list';
import { TaskForm } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form';
import { TaskItemType } from '@/_redux/todo-tasks-module';
import { FormSubmitCallbackType } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/_types';
import { FormValues } from '@/pages/todo/page/_redux/add-task-form-module';
import { PAGE_TEXTS } from '../../_constants/text';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  addTaskFormIsLoading: boolean;
  addTaskFormInitialValues: FormValues;
  isLoading: boolean;
  tasks: Array<TaskItemType>;
  onFormSubmit: FormSubmitCallbackType;
};

const BLOCK_NAME = 'Tasks-page-view';

export const TasksPageView = memo(
  ({
    isLoading,
    tasks,
    onFormSubmit,
    addTaskFormIsLoading,
    addTaskFormInitialValues,
  }: PropsType) => {
    return (
      <div className={cn(BLOCK_NAME)}>
        <ConnectedTaskList isLoading={isLoading} tasks={tasks} />
        <div className={cn(`${BLOCK_NAME}__form-container`)}>
          <Text text={PAGE_TEXTS.addFormTitle} />
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
