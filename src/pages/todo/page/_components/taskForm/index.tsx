import React, { memo } from 'react';
import { Field, Form } from 'react-final-form';
import classnames from 'classnames/bind';
import { required } from '@/pages/todo/page/_components/taskForm/_utils/validators';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  onSubmit: (values: any, form: any) => void;
  onCancel: (form?: any) => void;
  initialValues?: {
    description: string;
    isCompleted: boolean;
  };
  className?: string;
};

export const TaskForm = memo(
  ({ onSubmit, onCancel, initialValues, className }: PropsType) => {
    return (
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitting, form }) => {
          return (
            <form className={cn('wrapper', className)} onSubmit={handleSubmit}>
              <Field
                initialValue={initialValues?.description}
                name="description"
                validate={required}
              >
                {({ input, meta }) => {
                  const isError = meta.error && meta.touched;

                  return (
                    <div className={cn('row')}>
                      <textarea
                        className={cn({
                          [styles.error]: isError,
                        })}
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...input}
                        placeholder="Описание таски"
                      />
                      {isError && (
                        <div className={cn('error', 'errorField')}>
                          {meta.error}
                        </div>
                      )}
                    </div>
                  );
                }}
              </Field>
              <label htmlFor="isCompleted">Выполнена? </label>
              <Field
                component="input"
                initialValue={initialValues?.isCompleted}
                name="isCompleted"
                type="checkbox"
              />
              <div>
                <button disabled={submitting} type="submit">
                  Сохранить
                </button>
                <button
                  disabled={submitting}
                  onClick={() => onCancel(form)}
                  type="button"
                >
                  Отменить
                </button>
              </div>
            </form>
          );
        }}
      </Form>
    );
  },
);
