import React, { memo, useCallback } from 'react';
import classnames from 'classnames/bind';
import { ButtonLink, Modal } from '@wildberries/ui-kit';
import { ConnectedTaskList } from '@/pages/todo/page/_components/tasks-page-view/_components/tasks-list';
import { TaskForm } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form';
import { TaskItemType } from '@/_redux/todo-tasks-module';
import { FormSubmitCallbackType } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/_types';
import { FormValues } from '@/pages/todo/page/_redux/add-task-form-module';
import { PAGE_TEXTS } from '../../_constants/text';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  formIsLoading: boolean;
  formInitialValues: FormValues;
  isLoading: boolean;
  formModalIsOpened: boolean;
  tasks: Array<TaskItemType>;
  onFormSubmit: FormSubmitCallbackType;
  onToggleFormModal: (isOpened: boolean) => void;
};

const BLOCK_NAME = 'Tasks-page-view';

export const TasksPageView = memo(
  ({
    isLoading,
    tasks,
    onFormSubmit,
    formIsLoading,
    formInitialValues,
    formModalIsOpened,
    onToggleFormModal,
  }: PropsType) => {
    const handleOpen = useCallback(
      () => onToggleFormModal(true),
      [onToggleFormModal],
    );

    const handleClose = useCallback(
      () => onToggleFormModal(false),
      [onToggleFormModal],
    );

    return (
      <div className={cn(BLOCK_NAME)}>
        <ConnectedTaskList isLoading={isLoading} tasks={tasks} />
        <ButtonLink
          fullWidth={false}
          isTextCenter
          onClick={handleOpen}
          text={PAGE_TEXTS.addTaskFormModalButtonText}
          type="button"
        />
        <Modal
          disableOverlayClick
          isOpened={formModalIsOpened}
          isShowCloseIcon
          onClose={handleClose}
          title={PAGE_TEXTS.addFormTitle}
        >
          {/* лишний элемент - стили для TaskForm должны быть внутри этого компонента */}
          <div className={cn(`${BLOCK_NAME}__form-container`)}>
            <TaskForm
              initialValues={formInitialValues}
              isLoading={formIsLoading}
              onSubmit={onFormSubmit}
            />
          </div>
        </Modal>
      </div>
    );
  },
);
