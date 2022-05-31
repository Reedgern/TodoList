import React, { lazy, memo, Suspense } from 'react';
import classnames from 'classnames/bind';
import { Preview } from '@wildberries/preview-component';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Page';

const ConnectedTaskList = lazy(
  () => import('./_components/connected-task-list'),
);
const ConnectedOpenModalButton = lazy(
  () => import('./_components/connected-open-modal-button'),
);
const ConnectedAddTaskFormModal = lazy(
  () => import('./_components/connected-add-task-form'),
);

export const Page = memo(() => {
  return (
    <div className={cn(BLOCK_NAME)}>
      <Suspense fallback={<Preview mobileOnly />}>
        <ConnectedTaskList />
      </Suspense>
      <Suspense fallback={<></>}>
        <ConnectedOpenModalButton />
      </Suspense>
      <Suspense fallback={<></>}>
        <ConnectedAddTaskFormModal />
      </Suspense>
    </div>
  );
});
