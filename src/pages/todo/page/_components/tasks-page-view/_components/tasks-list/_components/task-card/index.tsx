import React from 'react';
import { connect } from 'react-redux';
import {
  deleteTaskSagaAction,
  TaskItemType,
  updateTaskSagaAction,
} from '@/_redux/todo-tasks-module';
import { TaskCardView } from '@/pages/todo/page/_components/tasks-page-view/_components/tasks-list/_components/task-card/_components/task-card-view';
import { FormSubmitCallbackType } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/types';

type OwnPropsType = {
  task: TaskItemType;
};

type DispatchPropsType = {
  deleteTask: (id: string) => void;
  updateTask: (task: TaskItemType) => void;
};

type ComponentStateType = {
  isEditMode: boolean;
};

export class TaskCard extends React.Component<
  OwnPropsType & DispatchPropsType,
  ComponentStateType
> {
  state: ComponentStateType = {
    isEditMode: false,
  };

  onCancelClick = () => {
    this.setState({ isEditMode: false });
  };

  onSubmitClick: FormSubmitCallbackType = (values, form) => {
    this.props.updateTask({
      id: this.props.task.id,
      description: values.description,
      isCompleted: values.isCompleted,
    });
    this.setState({ isEditMode: false });
  };

  onRemoveClick = () => {
    this.props.deleteTask(this.props.task.id);
  };

  onEditClick = () => {
    this.setState({ isEditMode: true });
  };

  render() {
    return (
      <TaskCardView
        isEditMode={this.state.isEditMode}
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
};

export const ConnectedTaskCard = connect(null, mapDispatchToProps)(TaskCard);
