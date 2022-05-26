import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { ConnectedTaskList } from '@/pages/todo/page/_components/connected-task-list';
import { ConnectedOpenAddTaskFormModalButton } from '@/pages/todo/page/_components/connected-open-add-task-form-modal-button';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const BLOCK_NAME = 'Page';

export const Page = memo(() => {
  return (
    <div className={cn(BLOCK_NAME)}>
      <ConnectedTaskList />
      <ConnectedOpenAddTaskFormModalButton />
    </div>
  );
});
