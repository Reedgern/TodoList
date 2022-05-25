import React, { memo, useCallback, useMemo, useState } from 'react';
import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import { FormValues } from '@/pages/todo/page/_redux/add-task-form-module/_types';
import { PAGE_TEXTS } from '@/pages/todo/page/_constants/text';
import { TaskForm } from '../../../task-form';
import styles from './index.module.scss';
import { TaskInfo } from './_components/task-info';

const cn = classnames.bind(styles);

type PropsType = {
  id: string;
  isLoading: boolean;
  description: string;
  isCompleted: boolean;
  onDelete: (id: string) => void;
  formSubmitCreator: ({
    id,
    callBackOnSuccess,
  }: {
    id: string;
    callBackOnSuccess: () => void;
  }) => (values: FormValues) => void;
};

const BLOCK_NAME = 'Task-card-view';

export const TaskCardView = memo(
  ({
    isLoading,
    id,
    description,
    isCompleted,
    formSubmitCreator,
    onDelete,
  }: PropsType) => {
    const [isEditMode, setIsEditMode] = useState(false);

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

    const handleEditClick = useCallback(() => setIsEditMode(true), []);

    const handleCancelClick = useCallback(() => setIsEditMode(false), []);

    const handleRemove = useCallback(() => onDelete(id), [onDelete, id]);

    const handleSubmit = useMemo(
      () =>
        formSubmitCreator({
          id,
          callBackOnSuccess: () => setIsEditMode(false),
        }),
      [formSubmitCreator, id],
    );

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
            onEditClick={handleEditClick}
            onRemoveClick={handleRemove}
          />
        ) : (
          <TaskForm
            initialValues={initialValues}
            isLoading={isLoading}
            onCancel={handleCancelClick}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    );
  },
);
