import React, { memo, useCallback } from 'react';
import { TaskForm } from '@/pages/todo/page/_components/task-form';
import { AddTaskFormValuesType } from '@/pages/todo/page/_components/task-form/_types';

type PropsType = {
  onCancel: (id: string) => void;
  onSubmit: (values: AddTaskFormValuesType) => void;
  initialValues: AddTaskFormValuesType;
  id: string;
  isLoading: boolean;
};

export const EditTaskForm = memo(
  ({ onSubmit, onCancel, initialValues, id, isLoading }: PropsType) => {
    const handleSubmit = useCallback(
      (values) => onSubmit({ id, ...values }),
      [onSubmit, id],
    );
    const handleCancel = useCallback(() => onCancel(id), [onCancel, id]);

    return (
      <TaskForm
        initialValues={initialValues}
        isLoading={isLoading}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    );
  },
);
