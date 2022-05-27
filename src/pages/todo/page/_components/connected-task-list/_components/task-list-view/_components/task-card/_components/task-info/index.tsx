import React, { memo } from 'react';
import classnames from 'classnames/bind';
import {
  BasicPencilEditIcon,
  BasicTrashIcon,
  ButtonLink,
  Text,
} from '@wildberries/ui-kit';
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
      <div
        className={cn(BLOCK_NAME, { [`${BLOCK_NAME}_completed`]: isCompleted })}
      >
        <Text text={description} />
        <div className={cn(`${BLOCK_NAME}__buttons-container`)}>
          <ButtonLink
            disabled={isLoading}
            isLoading={isLoading}
            notFullWidthOnMobile
            onClick={onEditClick}
            rightIcon={BasicPencilEditIcon}
            size="small"
            type="button"
            variant="add"
          />
          <ButtonLink
            disabled={isLoading}
            // не очень понял почему при загрузке тут лоадер
            isLoading={isLoading}
            notFullWidthOnMobile
            onClick={onRemoveClick}
            rightIcon={BasicTrashIcon}
            size="small"
            type="button"
            variant="remove"
          />
        </div>
      </div>
    );
  },
);
