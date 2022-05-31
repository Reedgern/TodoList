import { Modal } from '@wildberries/ui-kit';
import React, { memo } from 'react';
import i18next from 'i18next';
import { FormApi } from 'final-form';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';
import { TaskFormView } from '@/pages/todo/page/_components/task-form-view';
import { AddTaskFormValuesType } from '@/pages/todo/page/_components/task-form-view/_types';

type PropsType = {
  isModalOpened: boolean;
  onModalClose: () => void;
  isFormLoading: boolean;
  formInitialValues: AddTaskFormValuesType;
  onSubmit: (
    values: AddTaskFormValuesType,
    form: FormApi<AddTaskFormValuesType>,
  ) => void;
};

export const AddTaskFormModalView = memo(
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
        <TaskFormView
          initialValues={formInitialValues}
          isLoading={isFormLoading}
          onSubmit={onSubmit}
        />
      </Modal>
    );
  },
);
