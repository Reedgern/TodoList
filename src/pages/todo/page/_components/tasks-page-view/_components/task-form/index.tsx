import React, { memo } from 'react';
import { Field, Form } from 'react-final-form';
import classnames from 'classnames/bind';
import {
  ButtonLink,
  FormCheckbox,
  FormTextAreaInput,
} from '@wildberries/ui-kit';
import { descriptionValidator } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/_utils/validators';
import { FormSubmitCallbackType } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/types';
import { FormValues } from '@/pages/todo/page/_redux/add-task-form-module';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  isLoading: boolean;
  onSubmit: FormSubmitCallbackType;
  onCancel?: () => void;
  className?: string;
  initialValues?: FormValues;
};

export const TaskForm = memo(
  ({ onSubmit, onCancel, initialValues, className, isLoading }: PropsType) => {
    return (
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, invalid }) => {
          return (
            <form className={cn('wrapper', className)} onSubmit={handleSubmit}>
              <Field
                component={FormTextAreaInput}
                disabled={isLoading}
                initialValue={initialValues?.description}
                label="Описание таски"
                name="description"
                validate={descriptionValidator}
              />
              <Field
                component={FormCheckbox}
                disabled={isLoading}
                initialValue={initialValues?.isCompleted}
                label="Выполнена?"
                name="isCompleted"
                type="checkbox"
              />
              <div>
                <ButtonLink
                  disabled={invalid || isLoading}
                  isLoading={isLoading}
                  text="Сохранить"
                  type="submit"
                />
                {onCancel && (
                  <ButtonLink
                    disabled={invalid || isLoading}
                    isLoading={isLoading}
                    onClick={onCancel}
                    text="Отменить"
                  />
                )}
              </div>
            </form>
          );
        }}
      </Form>
    );
  },
);
