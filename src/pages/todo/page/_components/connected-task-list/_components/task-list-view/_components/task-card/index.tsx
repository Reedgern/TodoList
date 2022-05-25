import React, { memo, useCallback, useMemo } from 'react';
import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import { PAGE_TEXTS } from '@/pages/todo/page/_constants/text';
import { TaskForm } from '@/pages/todo/page/_components/task-form';
import { FormValuesType } from '@/pages/todo/page/_components/task-form/_types';
import styles from './index.module.scss';
import { TaskInfo } from './_components/task-info';

const cn = classnames.bind(styles);

type PropsType = {
  id: string;
  isLoading: boolean;
  description: string;
  isCompleted: boolean;
  onDelete: (id: string) => void;
  onUpdate: (id: string) => (values: FormValuesType) => void;
  isEditMode: boolean;
  onCancel: (id: string) => void;
  onEdit: (id: string) => void;
};

const BLOCK_NAME = 'Task-card-view';

export const TaskCardView = memo(
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
    const title = useMemo(
      () =>
        isEditMode
          ? PAGE_TEXTS.editModeTaskTitle
          : PAGE_TEXTS.viewModeTaskTitle,
      [isEditMode],
    );

    const initialValues = useMemo(
      () => ({ description, isCompleted }),
      [description, isCompleted],
    );

    const handleRemove = useCallback(() => onDelete(id), [onDelete, id]);
    const handleSubmit = useMemo(() => onUpdate(id), [onUpdate, id]);
    const handleEdit = useCallback(() => onEdit(id), [onEdit, id]);
    const handleCancel = useCallback(() => onCancel(id), [onCancel, id]);

    return (
      <div
        className={cn(BLOCK_NAME, {
          [`${BLOCK_NAME}_completed`]: isCompleted,
          [`${BLOCK_NAME}_edit-mode`]: isEditMode,
        })}
      >
        <Text text={title} />
        {!isEditMode ? (
          <TaskInfo
            description={description}
            isCompleted={isCompleted}
            isLoading={isLoading}
            onEditClick={handleEdit}
            onRemoveClick={handleRemove}
          />
        ) : (
          <TaskForm
            initialValues={initialValues}
            isLoading={isLoading}
            onCancel={handleCancel}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    );
  },
);
