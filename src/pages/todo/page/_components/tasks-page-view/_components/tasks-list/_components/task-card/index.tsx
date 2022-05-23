import React from 'react';
import { connect } from 'react-redux';
import {
  fetchFormManagerSagaAction,
  FormManagerType,
} from '@mihanizm56/redux-core-modules';
import {
  deleteTaskSagaAction,
  setTaskIsLoadingFinishAction,
  setTaskIsLoadingStartAction,
  TaskItemType,
  updateTaskByIdAction,
  updateTaskSagaAction,
} from '@/_redux/todo-tasks-module';
import { TaskCardView } from '@/pages/todo/page/_components/tasks-page-view/_components/tasks-list/_components/task-card/_components/task-card-view';
import { FormSubmitCallbackType } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/types';
import { updateTaskRequest } from '@/api/requests/update-task';

type OwnPropsType = {
  task: TaskItemType;
};

type DispatchPropsType = {
  deleteTask: (id: string) => void;
  updateTask: (task: TaskItemType) => void;
  fetchForm: (payload: FormManagerType) => void;
};

type ComponentStateType = {
  isEditMode: boolean;
};

// type PropsType = OwnPropsType & DispatchPropsType & ComponentStateType

// недостаточно эфективное проектирование
// у тебя каждая карточка получает одинаковые медоты который могут быть проброшены на все карточки сразу
// через один контейнер выше
export class TaskCard extends React.Component<
  // PropsType
  OwnPropsType & DispatchPropsType,
  ComponentStateType
> {
  state: ComponentStateType = {
    isEditMode: false,
  };

  // handleCancelClick
  onCancelClick = () => {
    this.setState({ isEditMode: false });
  };

  // handle
  onSubmitClick: FormSubmitCallbackType = (values, form) => {
    // const config = getFetchConfig(...)
    // this.props.fetchForm(config)

    this.props.fetchForm({
      formValues: values,
      formRequest: ({ body }) =>
        updateTaskRequest({ ...body, id: this.props.task.id }),
      loadingStartAction: () => setTaskIsLoadingStartAction(this.props.task.id),
      loadingStopAction: () => setTaskIsLoadingFinishAction(this.props.task.id),
      showNotification: true,
      responseDataFormatter: (data) => data.updatedTask,
      formSuccessAction: updateTaskByIdAction,
      callBackOnSuccess: () => this.setState({ isEditMode: false }),
      textMessageSuccess: 'Таска успешно изменена!',
    });
  };

  // handle
  onRemoveClick = () => {
    this.props.deleteTask(this.props.task.id);
  };

  // handle
  onEditClick = () => {
    this.setState({ isEditMode: true });
  };

  render() {
    return (
      <TaskCardView
        isEditMode={this.state.isEditMode}
        isLoading={this.props.task.isLoading}
        onCancelClick={this.onCancelClick}
        onEditClick={this.onEditClick}
        onRemoveClick={this.onRemoveClick}
        onSubmitClick={this.onSubmitClick}
        task={this.props.task}
      />
    );
  }
}

const mapDispatchToProps = {
  deleteTask: deleteTaskSagaAction,
  updateTask: updateTaskSagaAction,
  fetchForm: fetchFormManagerSagaAction,
};

export const ConnectedTaskCard = connect(null, mapDispatchToProps)(TaskCard);
