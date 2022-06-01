import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  deleteTaskSagaAction,
  isLoadingSelector,
  SetTaskActionPayloadType,
  setTasksAction,
  tasksSelector,
  updateTaskSagaAction,
} from '@/_redux/todo-tasks-module';
import { TaskListView } from '@/pages/todo/page/_components/connected-task-list/_components/task-list-view';
import { updateTask } from '@/_redux/todo-tasks-module/sagas/_utils/update-task';
import {
  EditTaskFormSubmitParamsType,
  TaskItemType,
} from '@/pages/todo/_types';

type PropsType = {
  tasks: TaskItemType[];
  isLoading: boolean;
  postUpdateTask: (payload: EditTaskFormSubmitParamsType) => void;
  deleteTask: (id: string) => void;
  setTasks: (payload: SetTaskActionPayloadType) => void;
};

class WrappedComponent extends Component<PropsType> {
  handleDeleteTask = (id: string) => {
    this.props.deleteTask(id);
  };

  handleUpdateTask = (values: EditTaskFormSubmitParamsType) => {
    this.props.postUpdateTask({
      id: values.id,
      description: values.description,
      isCompleted: values.isCompleted,
    });
  };

  handleCancel = (id: string) => {
    const updatedTasks = updateTask({
      tasks: this.props.tasks,
      id,
      isEditMode: false,
    });
    this.props.setTasks(updatedTasks);
  };

  handleEdit = (id: string) => {
    const updatedTasks = updateTask({
      tasks: this.props.tasks,
      id,
      isEditMode: true,
    });
    this.props.setTasks(updatedTasks);
  };

  render() {
    return (
      <TaskListView
        isLoading={this.props.isLoading}
        onCancelEditTask={this.handleCancel}
        onDeleteTask={this.handleDeleteTask}
        onEditTask={this.handleEdit}
        onUpdateTask={this.handleUpdateTask}
        tasks={this.props.tasks}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  tasks: tasksSelector(state),
});

const mapDispatchToProps = {
  postUpdateTask: updateTaskSagaAction,
  deleteTask: deleteTaskSagaAction,
  setTasks: setTasksAction,
};

export const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedComponent);
