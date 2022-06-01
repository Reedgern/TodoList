import { Modal } from '@wildberries/ui-kit';
import React, { memo } from 'react';
import i18next from 'i18next';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';
import { TaskForm } from '@/pages/todo/page/_components/task-form';
import { AddTaskFormValuesType } from '@/pages/todo/_types';

type PropsType = {
  isModalOpened: boolean;
  onModalClose: () => void;
  isFormLoading: boolean;
  formInitialValues: AddTaskFormValuesType;
  onSubmit: (values: AddTaskFormValuesType) => void;
};

export const AddTaskFormView = memo(
  ({
    isModalOpened,
    onModalClose,
    isFormLoading,
    formInitialValues,
    onSubmit,
  }: PropsType) => {
    return (
      <Modal
        disableOverlayClick
        isOpened={isModalOpened}
        isShowCloseIcon
        onClose={onModalClose}
        title={i18next.t(TASKS_PAGE_TRANSLATIONS.addFormTitle)}
      >
        <TaskForm
          initialValues={formInitialValues}
          isLoading={isFormLoading}
          onSubmit={onSubmit}
        />
      </Modal>
    );
  },
);
