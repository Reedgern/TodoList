import React, { memo } from 'react';
import { Field, Form } from 'react-final-form';
import classnames from 'classnames/bind';
import {
  ButtonLink,
  FormCheckbox,
  FormTextAreaInput,
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
      <>
        <Form initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit, invalid }) => {
            return (
              <form className={cn(BLOCK_NAME)} onSubmit={handleSubmit}>
                <Field
                  component={FormTextAreaInput}
                  disabled={isLoading}
                  label="Описание таски"
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
                  <ButtonLink
                    disabled={invalid || isLoading}
                    isLoading={isLoading}
                    size="small"
                    text="Сохранить"
                    type="submit"
                  />
                  {onCancel && (
                    <ButtonLink
                      disabled={invalid || isLoading}
                      onClick={onCancel}
                      size="small"
                      text="Отменить"
                      variant="remove"
                    />
                  )}
                </div>
              </form>
            );
          }}
        </Form>
      </>
    );
  },
);
