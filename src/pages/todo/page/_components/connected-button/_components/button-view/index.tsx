import { ButtonLink, Modal } from '@wildberries/ui-kit';
import React, { memo } from 'react';
import { PAGE_TEXTS } from '@/pages/todo/page/_constants/text';
import { ConnectedAddTaskForm } from '@/pages/todo/page/_components/connected-button/_components/button-view/_components/connected-add-task-form-modal';

type PropsType = {
  modalIsOpened: boolean;
  onClick: () => void;
  onModalClose: () => void;
};

export const ButtonView = memo(
  ({ modalIsOpened, onModalClose, onClick }: PropsType) => {
    return (
      <>
        <ButtonLink
          fullWidth={false}
          isTextCenter
          onClick={onClick}
          text={PAGE_TEXTS.addTaskFormModalButtonText}
          type="button"
        />
        <Modal
          disableOverlayClick
          isOpened={modalIsOpened}
          isShowCloseIcon
          onClose={onModalClose}
          title={PAGE_TEXTS.addFormTitle}
        >
          <ConnectedAddTaskForm />
        </Modal>
      </>
    );
  },
);
