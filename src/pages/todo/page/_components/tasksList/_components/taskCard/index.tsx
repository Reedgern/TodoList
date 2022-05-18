import React, { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames/bind';
import { TaskInfo } from '@/pages/todo/page/_components/tasksList/_components/taskCard/_components/card';
import { TaskForm } from '@/pages/todo/page/_components/taskForm';
import { ITask, updateTaskAction } from '@/_redux/todoTasks';
import styles from './index.module.scss';

type PropsType = {
  task: ITask;
  handleRemove: ({ id }: { id: string }) => void;
};

const cn = classnames.bind(styles);

export const TaskCard = memo(
  ({ task: { id, description, isCompleted }, handleRemove }: PropsType) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const dispatch = useDispatch();

    const onRemoveClick = useCallback(() => {
      handleRemove({ id });
    }, [handleRemove, id]);

    const onEditClick = useCallback(() => {
      setIsEditMode(true);
    }, []);

    const onCancelClick = useCallback(() => {
      setIsEditMode(false);
    }, []);

    const onSubmitClick = useCallback(
      (values) => {
        dispatch(
          updateTaskAction({
            id,
            description: values.description,
            isCompleted: values.isCompleted,
          }),
        );

        setIsEditMode(false);
      },
      [dispatch, id],
    );

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
