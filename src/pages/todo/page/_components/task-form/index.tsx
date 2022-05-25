import React, { memo, useMemo } from 'react';
import { Field, Form } from 'react-final-form';
import classnames from 'classnames/bind';
import {
  ButtonLink,
  FormCheckbox,
  FormTextAreaInput,
  GadgetsFloppyIcon,
  NavigationDeleteCircleIcon,
  withScreenResizeDetectHoc,
} from '@wildberries/ui-kit';
import { ScreenType } from '@wildberries/ui-kit/lib/hocs/with-screen-resize-detect-hoc/types';
import { PAGE_TEXTS } from '@/pages/todo/page/_constants/text';
import {
  FormSubmitCallbackType,
  FormValuesType,
} from '@/pages/todo/page/_components/task-form/_types';
import { FORM_FIELDS_NAMES } from '@/pages/todo/page/_components/task-form/_constants';
import { FORM_VALIDATIONS } from '@/pages/todo/page/_components/task-form/_utils/validators';
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

const FIELD_SUBSCRIPTION = {
  value: true,
  active: true,
  touched: true,
  invalid: true,
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
          return (
            <form className={cn(BLOCK_NAME)} onSubmit={handleSubmit}>
              <Field
                component={FormTextAreaInput}
                disabled={isLoading}
                label="Описание"
                name={FORM_FIELDS_NAMES.description}
                required
                subscription={FIELD_SUBSCRIPTION}
                validate={FORM_VALIDATIONS.description}
              />
              <Field
                component={FormCheckbox}
                disabled={isLoading}
                label="Выполнена?"
                name={FORM_FIELDS_NAMES.isCompleted}
                subscription={FIELD_SUBSCRIPTION}
                type="checkbox"
              />
              <div className={cn(`${BLOCK_NAME}__buttons-container`)}>
                {isMobile ? (
                  <ButtonLink
                    disabled={invalid || isLoading}
                    isLoading={isLoading}
                    isTextCenter
                    rightIcon={GadgetsFloppyIcon}
                    size="small"
                    type="submit"
                  />
                ) : (
                  <ButtonLink
                    disabled={invalid || isLoading}
                    fullWidth
                    isLoading={isLoading}
                    isTextCenter
                    size="small"
                    text={PAGE_TEXTS.submitFormButtonText}
                    type="submit"
                  />
                )}
                {onCancel &&
                  (isMobile ? (
                    <ButtonLink
                      disabled={isLoading}
                      isLoading={isLoading}
                      isTextCenter
                      onClick={onCancel}
                      rightIcon={NavigationDeleteCircleIcon}
                      size="small"
                      variant="remove"
                    />
                  ) : (
                    <ButtonLink
                      disabled={isLoading}
                      fullWidth
                      isLoading={isLoading}
                      isTextCenter
                      onClick={onCancel}
                      size="small"
                      text={PAGE_TEXTS.cancelButtonText}
                      variant="remove"
                    />
                  ))}
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
