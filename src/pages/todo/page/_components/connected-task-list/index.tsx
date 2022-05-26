import React from 'react';
import { connect } from 'react-redux';
import {
  fetchFormManagerSagaAction,
  FormManagerType,
  InitLoadManagerActionPayloadType,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import {
  deleteTaskSagaAction,
  isLoadingSelector,
  setTaskEditModeSagaAction,
  TaskItemType,
  tasksSelector,
  updateTaskSagaAction,
  UpdateTaskSagaActionPayloadType,
} from '@/_redux/todo-tasks-module';
import { TaskListView } from '@/pages/todo/page/_components/connected-task-list/_components/task-list-view';
import { FormValuesType } from '@/pages/todo/page/_components/task-form/_types';

type StateType = {
  tasks: TaskItemType[];
  isLoading: boolean;
};

type DispatchPropsType = {
  initLoadManagerActionSaga: (
    payload: InitLoadManagerActionPayloadType,
  ) => void;
  fetchFormManagerSagaAction: (payload: FormManagerType) => void;
  postUpdateTask: (payload: UpdateTaskSagaActionPayloadType) => void;
  deleteTaskSagaAction: (id: string) => void;
  setTaskEditModeSagaAction: ({ id: string, isEditMode: boolean }) => void;
};

type PropsType = StateType & DispatchPropsType;

class WrappedComponent extends React.Component<PropsType> {
  handleDeleteTask = (id: string) => {
    this.props.deleteTaskSagaAction(id);
  };

  handleUpdateTask = (id: string) => (values: FormValuesType) => {
    // const updateTaskConfig = getUpdateTaskConfig({ id, formValues: values });

    // this.props.fetchFormManagerSagaAction(updateTaskConfig);

    this.props.postUpdateTask({ id, ...values });
  };

  handleCancel = (id: string) => {
    this.props.setTaskEditModeSagaAction({ id, isEditMode: false });
  };

  handleEdit = (id: string) => {
    this.props.setTaskEditModeSagaAction({ id, isEditMode: true });
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
  initLoadManagerActionSaga,
  fetchFormManagerSagaAction,
  postUpdateTask: updateTaskSagaAction,
  deleteTaskSagaAction,
  setTaskEditModeSagaAction,
};

export const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedComponent);
