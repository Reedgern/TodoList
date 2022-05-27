import React from 'react';
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
import { FormValuesType } from '@/pages/todo/page/_components/task-form/_types';
import { updateTask } from '@/_redux/todo-tasks-module/sagas/_utils/update-task';

type StateType = {
  tasks: TaskItemType[];
  isLoading: boolean;
};

type DispatchPropsType = {
  postUpdateTask: (payload: UpdateTaskSagaActionPayloadType) => void;
  deleteTaskSagaAction: (id: string) => void;
  setTasksAction: (payload: SetTaskActionPayloadType) => void;
};

type PropsType = StateType & DispatchPropsType;

class WrappedComponent extends React.Component<PropsType> {
  handleDeleteTask = (id: string) => {
    this.props.deleteTaskSagaAction(id);
  };

  handleUpdateTask = (id: string) => (values: FormValuesType) => {
    this.props.postUpdateTask({ id, ...values });
  };

  handleCancel = (id: string) => {
    this.props.setTasksAction(
      updateTask({ tasks: this.props.tasks, id, isEditMode: false }),
    );
  };

  handleEdit = (id: string) => {
    this.props.setTasksAction(
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
  deleteTaskSagaAction,
  setTasksAction,
};

export const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedComponent);
