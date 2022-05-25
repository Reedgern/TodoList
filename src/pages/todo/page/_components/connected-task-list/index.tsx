import React from 'react';
import { connect } from 'react-redux';
import {
  fetchFormManagerSagaAction,
  FormManagerType,
  InitLoadManagerActionPayloadType,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import { Preloader } from '@wildberries/ui-kit';
import {
  isLoadingSelector,
  TaskItemType,
  tasksSelector,
  updateTaskSagaAction,
  UpdateTaskSagaActionPayloadType,
} from '@/_redux/todo-tasks-module';
import { TaskListView } from '@/pages/todo/page/_components/connected-task-list/_components/task-list-view';
import { getDeleteTaskConfig } from '@/pages/todo/page/_components/connected-task-list/_utils/get-delete-task-config';
import { getUpdateTaskConfig } from '@/pages/todo/page/_components/connected-task-list/_utils/get-update-task-config';
import { FormValuesType } from '@/pages/todo/page/_components/task-form/_types';

type StatePropsType = {
  tasks: TaskItemType[];
  isLoading: boolean;
};

type DispatchPropsType = {
  initLoadManagerActionSaga: (
    payload: InitLoadManagerActionPayloadType,
  ) => void;
  fetchFormManagerSagaAction: (payload: FormManagerType) => void;
  updateTaskSagaAction: (payload: UpdateTaskSagaActionPayloadType) => void;
};

type PropsType = StatePropsType & DispatchPropsType;

class WrappedComponent extends React.Component<PropsType, unknown> {
  handleDeleteTask = (id: string) => {
    const deleteTaskConfig = getDeleteTaskConfig(id);
    this.props.initLoadManagerActionSaga(deleteTaskConfig);
  };

  handleUpdateTask = (id: string) => (values: FormValuesType) => {
    const updateTaskConfig = getUpdateTaskConfig({ id, formValues: values });
    this.props.fetchFormManagerSagaAction(updateTaskConfig);
  };

  handleCancel = (id: string) => {
    this.props.updateTaskSagaAction({ id, isEditMode: false });
  };

  handleEdit = (id: string) => {
    this.props.updateTaskSagaAction({ id, isEditMode: true });
  };

  render() {
    if (this.props.isLoading) {
      return <Preloader size="large" />;
    }

    return (
      <TaskListView
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
  updateTaskSagaAction,
};

export const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedComponent);
