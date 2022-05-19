import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { TaskInfo } from '@/pages/todo/page/_components/tasks-page-view/_components/tasks-list/_components/task-card/_components/task-card-view/_components/task-info';
import { TaskForm } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form';
import { TaskItemType } from '@/_redux/todo-tasks-module';
import { FormSubmitCallbackType } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/types';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  isEditMode: boolean;
  task: TaskItemType;
  onRemoveClick: () => void;
  onEditClick: () => void;
  onSubmitClick: FormSubmitCallbackType;
  onCancelClick: () => void;
};

export const TaskCardView = memo(
  ({
    isEditMode,
    task: { description, isCompleted },
    onEditClick,
    onSubmitClick,
    onRemoveClick,
    onCancelClick,
  }: PropsType) => {
    return (
      <div className={cn('wrapper')}>
        <h2 className={cn('title')}>
          {isEditMode ? 'Режим редактирования' : 'Информация о таске'}
        </h2>
        {!isEditMode ? (
          <TaskInfo
            description={description}
            isCompleted={isCompleted}
            onEditClick={onEditClick}
            onRemoveClick={onRemoveClick}
          />
        ) : (
          <TaskForm
            initialValues={{ description, isCompleted }}
            onCancel={onCancelClick}
            onSubmit={onSubmitClick}
          />
        )}
      </div>
    );
  },
);
