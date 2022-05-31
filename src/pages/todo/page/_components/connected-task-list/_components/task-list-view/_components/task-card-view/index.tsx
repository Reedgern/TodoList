import React, { memo, useMemo } from 'react';
import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';
import { AddTaskFormValuesType } from '@/pages/todo/page/_components/task-form-view/_types';
import { EditTaskFormView } from '@/pages/todo/page/_components/connected-task-list/_components/task-list-view/_components/task-card-view/_components/edit-task-form-view';
import styles from './index.module.scss';
import { TaskInfo } from './_components/task-info';

const cn = classnames.bind(styles);

type PropsType = {
  id: string;
  isLoading: boolean;
  description: string;
  isCompleted: boolean;
  onDelete: (id: string) => void;
  onUpdate: (id: string) => (values: AddTaskFormValuesType) => void;
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
    const title = useMemo(() => {
      const titleToTranslate = isEditMode
        ? TASKS_PAGE_TRANSLATIONS.editModeTaskTitle
        : TASKS_PAGE_TRANSLATIONS.viewModeTaskTitle;

      return i18next.t(titleToTranslate);
    }, [isEditMode]);

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
          <EditTaskFormView
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
