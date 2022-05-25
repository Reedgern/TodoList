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
import { FormSubmitCallbackType } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/_types';
import { FormValues } from '@/pages/todo/page/_redux/add-task-form-module';
import { FORM_VALIDATIONS } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/_utils/validators';
import { FORM_FIELDS_NAMES } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/_constants';
import { PAGE_TEXTS } from '@/pages/todo/page/_constants/text';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  isLoading: boolean;
  onSubmit: FormSubmitCallbackType;
  onCancel?: () => void;
  initialValues?: FormValues;
  screenType: ScreenType;
};

const BLOCK_NAME = 'task-form';

const WrappedComponent = memo(
  ({ onSubmit, onCancel, initialValues, isLoading, screenType }: PropsType) => {
    const isMobile = useMemo(() => screenType === 'mobile', [screenType]);

    return (
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit, invalid }) => {
          return (
            <form className={cn(BLOCK_NAME)} onSubmit={handleSubmit}>
              <Field
                component={FormTextAreaInput}
                disabled={isLoading}
                label="Описание"
                name={FORM_FIELDS_NAMES.description}
                validate={FORM_VALIDATIONS.description}
              />
              <Field
                component={FormCheckbox}
                disabled={isLoading}
                label="Выполнена?"
                name={FORM_FIELDS_NAMES.isCompleted}
                type="checkbox"
              />
              <div className={cn(`${BLOCK_NAME}__buttons-container`)}>
                <div className={cn(`${BLOCK_NAME}__buttons-container_button`)}>
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
                </div>
                {onCancel && (
                  <div
                    className={cn(`${BLOCK_NAME}__buttons-container_button`)}
                  >
                    {isMobile ? (
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
                    )}
                  </div>
                )}
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
