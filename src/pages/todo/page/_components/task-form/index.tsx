import React, { memo, useMemo } from 'react';
import { Field, Form } from 'react-final-form';
import classnames from 'classnames/bind';
import {
  ButtonLink,
  FormCheckbox,
  FormTextAreaInput,
  withScreenResizeDetectHoc,
} from '@wildberries/ui-kit';
import { ScreenType } from '@wildberries/ui-kit/lib/hocs/with-screen-resize-detect-hoc/types';
import { FormApi } from 'final-form';
import i18next from 'i18next';
import { AddTaskFormValuesType } from '@/pages/todo/page/_components/task-form/_types';
import { ADD_TASK_FORM_FIELDS_NAMES } from '@/pages/todo/page/_components/task-form/_constants';
import { addTaskFormValidations } from '@/pages/todo/page/_components/task-form/_utils/validators';
import {
  getFormCancelButtonProps,
  getFormSaveButtonProps,
} from '@/pages/todo/page/_components/task-form/_utils/get-form-button-props';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  isLoading: boolean;
  onSubmit: (
    values: AddTaskFormValuesType,
    form: FormApi<AddTaskFormValuesType>,
  ) => void;
  onCancel?: () => void;
  initialValues?: AddTaskFormValuesType;
  screenType: ScreenType;
  id?: string;
};

const BLOCK_NAME = 'Task-form';

const FORM_SUBSCRIPTION = {
  invalid: true,
  touched: true,
  errors: true,
  error: true,
};

const WrappedComponent = memo(
  ({
    onSubmit,
    onCancel,
    initialValues,
    isLoading,
    screenType,
    id,
  }: PropsType) => {
    const isMobile = useMemo(() => screenType === 'mobile', [screenType]);

    return (
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        subscription={FORM_SUBSCRIPTION}
      >
        {({ handleSubmit, invalid }) => {
          const saveButtonProps = getFormSaveButtonProps({
            invalid,
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
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <ButtonLink {...saveButtonProps} />
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                {onCancel && <ButtonLink {...cancelButtonProps} />}
              </div>
            </form>
          );
        }}
      </Form>
    );
  },
);

export const TaskForm = withScreenResizeDetectHoc<
  Omit<PropsType, 'screenType'>
>({})(WrappedComponent);
