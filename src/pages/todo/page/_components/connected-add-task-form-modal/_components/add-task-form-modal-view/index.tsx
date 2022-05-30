import { Modal } from '@wildberries/ui-kit';
import React, { memo } from 'react';
import i18next from 'i18next';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';
import { ConnectedAddTaskForm } from '@/pages/todo/page/_components/connected-add-task-form-modal/_components/add-task-form-modal-view/_components/connected-add-task-form-modal';

type PropsType = {
  modalIsOpened: boolean;
  onModalClose: () => void;
};

export const AddTaskFormModalView = memo(
  ({ modalIsOpened, onModalClose }: PropsType) => {
    return (
      <Modal
        disableOverlayClick
        isOpened={modalIsOpened}
        isShowCloseIcon
        onClose={onModalClose}
        title={i18next.t(TASKS_PAGE_TRANSLATIONS.addFormTitle)}
      >
        <ConnectedAddTaskForm />
      </Modal>
    );
  },
);
