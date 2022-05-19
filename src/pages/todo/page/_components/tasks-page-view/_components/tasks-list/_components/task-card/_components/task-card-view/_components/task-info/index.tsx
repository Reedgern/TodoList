import React, { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  description: string;
  isCompleted: boolean;
  onEditClick: () => void;
  onRemoveClick: () => void;
};

export const TaskInfo = memo(
  ({ description, isCompleted, onRemoveClick, onEditClick }: PropsType) => {
    return (
      <div className={cn('wrapper')}>
        <div className={cn({ [styles.completed]: isCompleted })}>
          {description}
        </div>
        <div>
          <button
            className={cn('editButton')}
            onClick={onEditClick}
            type="button"
          >
            Редактировать
          </button>
          <button
            className={cn('removeButton')}
            onClick={onRemoveClick}
            type="button"
          >
            Удалить
          </button>
        </div>
      </div>
    );
  },
);
