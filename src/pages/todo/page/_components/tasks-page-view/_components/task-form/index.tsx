import React, { memo } from 'react';
import { Field, Form } from 'react-final-form';
import classnames from 'classnames/bind';
import {
  ButtonLink,
  FormCheckbox,
  FormTextAreaInput,
  GadgetsFloppyIcon,
  NavigationDeleteCircleIcon,
} from '@wildberries/ui-kit';
import { FormSubmitCallbackType } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/_types';
import { FormValues } from '@/pages/todo/page/_redux/add-task-form-module';
import { FORM_VALIDATIONS } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/_utils/validators';
import { FORM_FIELDS_NAMES } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/_constants';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  isLoading: boolean;
  onSubmit: FormSubmitCallbackType;
  onCancel?: () => void;
  initialValues?: FormValues;
};

const BLOCK_NAME = 'task-form';

export const TaskForm = memo(
  ({ onSubmit, onCancel, initialValues, isLoading }: PropsType) => {
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
                  <ButtonLink
                    disabled={invalid || isLoading}
                    fullWidth
                    isLoading={isLoading}
                    isTextCenter
                    rightIcon={GadgetsFloppyIcon}
                    size="small"
                    type="submit"
                    variant="interface"
                  />
                </div>
                {onCancel && (
                  <div
                    className={cn(`${BLOCK_NAME}__buttons-container_button`)}
                  >
                    <ButtonLink
                      disabled={isLoading}
                      fullWidth
                      isLoading={isLoading}
                      isTextCenter
                      onClick={onCancel}
                      rightIcon={NavigationDeleteCircleIcon}
                      size="small"
                      variant="remove"
                    />
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
