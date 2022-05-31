import React, { memo, useCallback, useMemo } from 'react';
import { TaskFormView } from '@/pages/todo/page/_components/task-form-view';
import { AddTaskFormValuesType } from '@/pages/todo/page/_components/task-form-view/_types';

type PropsType = {
  onCancel: (id: string) => void;
  onSubmit: (id: string) => (values: AddTaskFormValuesType) => void;
  initialValues: AddTaskFormValuesType;
  id: string;
  isLoading: boolean;
};

export const EditTaskFormView = memo(
  ({ onSubmit, onCancel, initialValues, id, isLoading }: PropsType) => {
    const handleSubmit = useMemo(() => onSubmit(id), [onSubmit, id]);
    const handleCancel = useCallback(() => onCancel(id), [onCancel, id]);

    return (
      <TaskFormView
        initialValues={initialValues}
        isLoading={isLoading}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    );
  },
);
