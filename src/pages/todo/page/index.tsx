import React, { lazy, memo, Suspense } from 'react';
import classnames from 'classnames/bind';
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
  () => import('./_components/connected-add-task-form-modal'),
);

export const Page = memo(() => {
  return (
    <div className={cn(BLOCK_NAME)}>
      <Suspense fallback={<></>}>
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
