import React, { memo, useMemo } from 'react';
import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import { EditTaskForm } from '@/pages/todo/page/_components/connected-task-list/_components/task-list-view/_components/task-card/_components/edit-task-form';
import { getTaskTitle } from '@/pages/todo/page/_components/connected-task-list/_components/task-list-view/_components/task-card/_utils/get-task-title';
import { EditTaskFormSubmitParamsType } from '@/pages/todo/_types';
import styles from './index.module.scss';
import { TaskInfo } from './_components/task-info';

const cn = classnames.bind(styles);

type PropsType = {
  id: string;
  isLoading: boolean;
  description: string;
  isCompleted: boolean;
  onDelete: (id: string) => void;
  onUpdate: (values: EditTaskFormSubmitParamsType) => void;
  isEditMode: boolean;
  onCancel: (id: string) => void;
  onEdit: (id: string) => void;
};

const BLOCK_NAME = 'Task-card';

export const TaskCard = memo(
  ({
    isLoading,
    id,
    description,
    isCompleted,
    onUpdate,
    onDelete,
    onCancel,
    onEdit,
    isEditMode,
  }: PropsType) => {
    const title = useMemo(() => getTaskTitle(isEditMode), [isEditMode]);

    const initialValues = useMemo(
      () => ({ description, isCompleted }),
      [description, isCompleted],
    );

    return (
      <div
        className={cn(BLOCK_NAME, {
          [`${BLOCK_NAME}--completed`]: isCompleted,
          [`${BLOCK_NAME}--edit-mode`]: isEditMode,
        })}
      >
        <Text text={title} />

        {isEditMode ? (
          <EditTaskForm
            id={id}
            initialValues={initialValues}
            isLoading={isLoading}
            onCancel={onCancel}
            onSubmit={onUpdate}
          />
        ) : (
          <TaskInfo
            description={description}
            id={id}
            isLoading={isLoading}
            onEditClick={onEdit}
            onRemoveClick={onDelete}
          />
        )}
      </div>
    );
  },
);
