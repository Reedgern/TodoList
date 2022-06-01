/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, useMemo } from 'react';
import { Field, Form } from 'react-final-form';
import classnames from 'classnames/bind';
import {
  ButtonLink,
  FormCheckbox,
  FormTextAreaInput,
  withScreenResizeDetectHoc,
  WithScreenResizePropsType,
} from '@wildberries/ui-kit';
import i18next from 'i18next';
import { ADD_TASK_FORM_FIELDS_NAMES } from '@/pages/todo/page/_components/task-form/_constants';
import { addTaskFormValidations } from '@/pages/todo/page/_components/task-form/_utils/validators';
import {
  getFormCancelButtonProps,
  getFormSaveButtonProps,
} from '@/pages/todo/page/_components/task-form/_utils/get-form-button-props';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';
import { AddTaskFormValuesType } from '@/pages/todo/_types';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type ExternalPropsType = {
  isLoading: boolean;
  onSubmit: (values: AddTaskFormValuesType) => void;
  onCancel?: () => void;
  initialValues?: AddTaskFormValuesType;
};

type PropsType = ExternalPropsType & WithScreenResizePropsType;

const BLOCK_NAME = 'Task-form';

const FORM_SUBSCRIPTION = {
  touched: true,
  errors: true,
  error: true,
};

const WrappedComponent = memo(
  ({ onSubmit, onCancel, initialValues, isLoading, screenType }: PropsType) => {
    const isMobile = useMemo(() => screenType === 'mobile', [screenType]);

    return (
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        subscription={FORM_SUBSCRIPTION}
      >
        {({ handleSubmit }) => {
          const saveButtonProps = getFormSaveButtonProps({
            isLoading,
            isMobile,
          });

          const cancelButtonProps = getFormCancelButtonProps({
            isLoading,
            isMobile,
            onClick: onCancel,
          });

          return (
            <form className={cn(BLOCK_NAME)} onSubmit={handleSubmit}>
              <Field
                component={FormTextAreaInput}
                disabled={isLoading}
                label={i18next.t(
                  TASKS_PAGE_TRANSLATIONS.taskFormDescriptionLabel,
                )}
                name={ADD_TASK_FORM_FIELDS_NAMES.description}
                required
                validate={addTaskFormValidations.description}
              />
              <Field
                component={FormCheckbox}
                disabled={isLoading}
                label={i18next.t(
                  TASKS_PAGE_TRANSLATIONS.taskFormIsCompletedLabel,
                )}
                name={ADD_TASK_FORM_FIELDS_NAMES.isCompleted}
                type="checkbox"
              />
              <div className={cn(`${BLOCK_NAME}__buttons-container`)}>
                <ButtonLink {...saveButtonProps} />
                {onCancel && <ButtonLink {...cancelButtonProps} />}
              </div>
            </form>
          );
        }}
      </Form>
    );
  },
);

export const TaskForm = withScreenResizeDetectHoc<ExternalPropsType>({})(
  WrappedComponent,
);
