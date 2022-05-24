import React, { memo, useCallback } from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import {
  fetchFormManagerSagaAction,
  FormManagerType,
  InitLoadManagerActionPayloadType,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import { Preloader, Text } from '@wildberries/ui-kit';
import { TaskItemType } from '@/_redux/todo-tasks-module';
import {
  getUpdateTaskConfig,
  UpdateTaskConfigParamsType,
} from '@/pages/todo/page/_components/tasks-page-view/_components/tasks-list/_utils/getUpdateTaskConfig';
import { getDeleteTaskConfig } from '@/pages/todo/page/_components/tasks-page-view/_components/tasks-list/_utils/getDeleteTaskConfig';
import { FormValues } from '@/pages/todo/page/_redux/add-task-form-module';
import { PAGE_TEXTS } from '@/pages/todo/page/_constants/text';
import styles from './index.module.scss';
import { TaskCardView } from './_components/task-card';

const cn = classnames.bind(styles);

type OwnPropsType = {
  tasks: TaskItemType[];
  isLoading: boolean;
};

const BLOCK_NAME = 'Tasks-list';

type DispatchPropsType = {
  onDelete: (params: InitLoadManagerActionPayloadType) => void;
  onUpdate: (params: FormManagerType) => void;
};

type PropsType = OwnPropsType & DispatchPropsType;

export const TasksList = memo(
  ({ tasks, onDelete, onUpdate, isLoading }: PropsType) => {
    const formSubmitCreator = useCallback(
      ({
          callBackOnSuccess,
          id,
        }: {
          callBackOnSuccess: UpdateTaskConfigParamsType['callBackOnSuccess'];
          id: string;
        }) =>
        (values: FormValues) => {
          const config = getUpdateTaskConfig({
            formValues: values,
            id,
            callBackOnSuccess,
          });
          onUpdate(config);
        },
      [onUpdate],
    );

    const handleRemove = useCallback(
      (id: string) => {
        const config = getDeleteTaskConfig({ id });
        onDelete(config);
      },
      [onDelete],
    );

    if (isLoading) {
      return <Preloader size="large" />;
    }

    return tasks.length === 0 ? (
      <Text text={PAGE_TEXTS.noTasksMessage} />
    ) : (
      <div className={cn(BLOCK_NAME)}>
        {tasks.map((task) => (
          <TaskCardView
            key={task.id}
            description={task.description}
            formSubmitCreator={formSubmitCreator}
            id={task.id}
            isCompleted={task.isCompleted}
            isLoading={task.isLoading}
            onDelete={handleRemove}
          />
        ))}
      </div>
    );
  },
);

const mapDispatchToProps = {
  onUpdate: fetchFormManagerSagaAction,
  onDelete: initLoadManagerActionSaga,
};

export const ConnectedTaskList = connect(null, mapDispatchToProps)(TasksList);
