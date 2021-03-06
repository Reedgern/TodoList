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
import {
  FormSubmitCallbackType,
  FormValuesType,
} from '@/pages/todo/page/_components/task-form/_types';
import { FORM_FIELDS_NAMES } from '@/pages/todo/page/_components/task-form/_constants';
import { addTaskFormValidations } from '@/pages/todo/page/_components/task-form/_utils/validators';
import {
  getFormCancelButtonProps,
  getFormSaveButtonProps,
} from '@/pages/todo/page/_components/task-form/_utils/get-form-button-props';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  isLoading: boolean;
  onSubmit: FormSubmitCallbackType;
  onCancel?: () => void;
  initialValues?: FormValuesType;
  screenType: ScreenType;
};

const BLOCK_NAME = 'task-form';

const FORM_SUBSCRIPTION = {
  invalid: true,
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
                label="Описание"
                name={FORM_FIELDS_NAMES.description}
                required
                validate={addTaskFormValidations.description}
              />
              <Field
                component={FormCheckbox}
                disabled={isLoading}
                label="Выполнена?"
                name={FORM_FIELDS_NAMES.isCompleted}
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
