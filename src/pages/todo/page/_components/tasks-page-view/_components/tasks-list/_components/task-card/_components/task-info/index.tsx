import React, { memo, useMemo } from 'react';
import classnames from 'classnames/bind';
import {
  BasicPencilEditIcon,
  BasicTrashIcon,
  ButtonLink,
  Text,
  withScreenResizeDetectHoc,
} from '@wildberries/ui-kit';
import { ScreenType } from '@wildberries/ui-kit/lib/hocs/with-screen-resize-detect-hoc/types';
import { PAGE_TEXTS } from '@/pages/todo/page/_constants/text';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  description: string;
  isCompleted: boolean;
  onEditClick: () => void;
  onRemoveClick: () => void;
  isLoading: boolean;
  screenType: ScreenType;
};

// чуть удобнее потом с типами работать если так делать не описывая везде типы
// type PropsType = {
//   description: string;
//   isCompleted: boolean;
//   onEditClick: () => void;
//   onRemoveClick: () => void;
//   isLoading: boolean;
// } & WithScreenResizePropsType

const BLOCK_NAME = 'Task-info';

const WrappedComponent = memo(
  ({
    description,
    isCompleted,
    onRemoveClick,
    onEditClick,
    isLoading,
    screenType,
  }: PropsType) => {
    // тк не много компонентов участвует в перестроении - эффективнее будет переключение компонентов через css
    // подписка на ресайз достаточно дорогая и должна использоваться аккуратно а не в каждой карточке
    const isMobile = useMemo(() => screenType === 'mobile', [screenType]);

    return (
      <div
        className={cn(BLOCK_NAME, { [`${BLOCK_NAME}_completed`]: isCompleted })}
      >
        <Text text={description} />
        <div
          className={cn(`${BLOCK_NAME}__buttons-container`, {
            [`${BLOCK_NAME}__buttons-container_mobile`]: isMobile,
          })}
        >
          {isMobile ? (
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
          ) : (
            <ButtonLink
              disabled={isLoading}
              isLoading={isLoading}
              onClick={onEditClick}
              size="small"
              text={PAGE_TEXTS.editButtonText}
              type="button"
              variant="add"
            />
          )}
          {isMobile ? (
            <ButtonLink
              disabled={isLoading}
              isLoading={isLoading}
              notFullWidthOnMobile
              onClick={onRemoveClick}
              rightIcon={BasicTrashIcon}
              size="small"
              type="button"
              variant="remove"
            />
          ) : (
            <ButtonLink
              disabled={isLoading}
              isLoading={isLoading}
              onClick={onRemoveClick}
              size="small"
              text={PAGE_TEXTS.removeButtonText}
              type="button"
              variant="remove"
            />
          )}
        </div>
      </div>
    );
  },
);

export const TaskInfo = withScreenResizeDetectHoc<
  Omit<PropsType, 'screenType'>
>({})(WrappedComponent);
