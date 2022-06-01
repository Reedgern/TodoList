/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, useCallback, useMemo } from 'react';
import classnames from 'classnames/bind';
import { ButtonLink, Text } from '@wildberries/ui-kit';
import { getTaskButtonProps } from '@/pages/todo/page/_components/connected-task-list/_components/task-list-view/_components/task-card/_components/task-info/_utils/get-task-button-props';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  id: string;
  description: string;
  onEditClick: (id: string) => void;
  onRemoveClick: (id: string) => void;
  isLoading: boolean;
};

const BLOCK_NAME = 'Task-info';

export const TaskInfo = memo(
  ({ description, onRemoveClick, onEditClick, isLoading, id }: PropsType) => {
    const handleRemove = useCallback(
      () => onRemoveClick(id),
      [onRemoveClick, id],
    );

    const handleEdit = useCallback(() => onEditClick(id), [onEditClick, id]);

    const editButtonProps = useMemo(
      () =>
        getTaskButtonProps({ isLoading, onClick: handleEdit, type: 'edit' }),
      [isLoading, handleEdit],
    );

    const removeButtonProps = useMemo(
      () =>
        getTaskButtonProps({
          isLoading,
          onClick: handleRemove,
          type: 'remove',
        }),
      [isLoading, handleRemove],
    );

    return (
      <div className={cn(BLOCK_NAME)}>
        <Text text={description} />

        <div className={cn(`${BLOCK_NAME}__buttons-container`)}>
          <ButtonLink {...editButtonProps} />
          <ButtonLink {...removeButtonProps} />
        </div>
      </div>
    );
  },
);
