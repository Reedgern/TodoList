import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { ButtonLink, Text } from '@wildberries/ui-kit';
import { PAGE_TEXTS } from '@/pages/todo/page/_constants/text';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  description: string;
  isCompleted: boolean;
  onEditClick: () => void;
  onRemoveClick: () => void;
  isLoading: boolean;
};

const BLOCK_NAME = 'Task-info';

export const TaskInfo = memo(
  ({
    description,
    isCompleted,
    onRemoveClick,
    onEditClick,
    isLoading,
  }: PropsType) => {
    return (
      <div className={cn(BLOCK_NAME)}>
        <div className={cn({ [`${BLOCK_NAME}_completed`]: isCompleted })}>
          <Text text={description} />
        </div>
        <div className={cn(`${BLOCK_NAME}__buttons-container`)}>
          <ButtonLink
            disabled={isLoading}
            onClick={onEditClick}
            size="small"
            text={PAGE_TEXTS.editButtonText}
            type="button"
            variant="add"
          />
          <ButtonLink
            disabled={isLoading}
            onClick={onRemoveClick}
            size="small"
            text={PAGE_TEXTS.removeButtonText}
            type="button"
            variant="remove"
          />
        </div>
      </div>
    );
  },
);
