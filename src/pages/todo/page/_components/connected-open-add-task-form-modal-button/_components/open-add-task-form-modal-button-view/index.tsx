import { ButtonLink, Modal } from '@wildberries/ui-kit';
import React, { memo } from 'react';
import { TASKS_PAGE_TEXTS } from '@/pages/todo/page/_constants/text';
import { ConnectedAddTaskForm } from '@/pages/todo/page/_components/connected-open-add-task-form-modal-button/_components/open-add-task-form-modal-button-view/_components/connected-add-task-form-modal';

type PropsType = {
  modalIsOpened: boolean;
  onClick: () => void;
  onModalClose: () => void;
};

export const OpenAddTaskFormModalButtonView = memo(
  ({ modalIsOpened, onModalClose, onClick }: PropsType) => {
    return (
      <>
        <ButtonLink
          fullWidth={false}
          isTextCenter
          onClick={onClick}
          text={TASKS_PAGE_TEXTS.addTaskFormModalButtonText}
          type="button"
        />
        <Modal
          disableOverlayClick
          isOpened={modalIsOpened}
          isShowCloseIcon
          onClose={onModalClose}
          title={TASKS_PAGE_TEXTS.addFormTitle}
        >
          <ConnectedAddTaskForm />
        </Modal>
      </>
    );
  },
);
