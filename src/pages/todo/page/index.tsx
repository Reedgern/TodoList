import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { ConnectedTaskList } from '@/pages/todo/page/_components/connected-task-list';
import { ConnectedOpenModalButton } from '@/pages/todo/page/_components/connected-open-modal-button';
import { ConnectedAddTaskFormModal } from '@/pages/todo/page/_components/connected-add-task-form-modal';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Page';

export const Page = memo(() => {
  return (
    <div className={cn(BLOCK_NAME)}>
      <ConnectedTaskList />
      <ConnectedOpenModalButton />
      <ConnectedAddTaskFormModal />
    </div>
  );
});
