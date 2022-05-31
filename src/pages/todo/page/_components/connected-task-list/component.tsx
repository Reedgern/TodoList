import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  deleteTaskSagaAction,
  isLoadingSelector,
  SetTaskActionPayloadType,
  setTasksAction,
  TaskItemType,
  tasksSelector,
  updateTaskSagaAction,
  UpdateTaskSagaActionPayloadType,
} from '@/_redux/todo-tasks-module';
import { TaskListView } from '@/pages/todo/page/_components/connected-task-list/_components/task-list-view';
import { AddTaskFormValuesType } from '@/pages/todo/page/_components/task-form-view/_types';
import { updateTask } from '@/_redux/todo-tasks-module/sagas/_utils/update-task';

type PropsType = {
  tasks: TaskItemType[];
  isLoading: boolean;
  postUpdateTask: (payload: UpdateTaskSagaActionPayloadType) => void;
  deleteTask: (id: string) => void;
  setTasks: (payload: SetTaskActionPayloadType) => void;
};

class WrappedComponent extends Component<PropsType> {
  handleDeleteTask = (id: string) => {
    this.props.deleteTask(id);
  };

  handleUpdateTask = (id: string) => (values: AddTaskFormValuesType) => {
    this.props.postUpdateTask({ id, ...values });
  };

  handleCancel = (id: string) => {
    this.props.setTasks(
      updateTask({ tasks: this.props.tasks, id, isEditMode: false }),
    );
  };

  handleEdit = (id: string) => {
    this.props.setTasks(
      updateTask({ tasks: this.props.tasks, id, isEditMode: true }),
    );
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
