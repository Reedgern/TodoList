/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, useMemo } from 'react';
import classnames from 'classnames/bind';
import { ButtonLink, Text } from '@wildberries/ui-kit';
import {
  getRemoveButtonProps,
  getTaskEditButtonProps,
} from '@/pages/todo/page/_components/connected-task-list/_components/task-list-view/_components/task-card/_components/task-info/_utils/get-button-props';
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
    const editButtonProps = useMemo(
      () => getTaskEditButtonProps({ isLoading, onClick: onEditClick }),
      [isLoading, onEditClick],
    );
    const removeButtonProps = useMemo(
      () => getRemoveButtonProps({ isLoading, onClick: onRemoveClick }),
      [isLoading, onRemoveClick],
    );

    return (
      <div
        className={cn(BLOCK_NAME, {
          // проверь чтобы ВСЕ модификаторы в проекте были по единообразной, принятой конвенции БЭМ
          [`${BLOCK_NAME}_completed`]: isCompleted,
        })}
      >
        <Text text={description} />

        <div className={cn(`${BLOCK_NAME}__buttons-container`)}>
          <ButtonLink {...editButtonProps} />
          <ButtonLink {...removeButtonProps} />
        </div>
      </div>
    );
  },
);
