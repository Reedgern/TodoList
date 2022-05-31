import React from 'react';
import { connect } from 'react-redux';
import {
  fetchFormManagerSagaAction,
  FormManagerType,
} from '@mihanizm56/redux-core-modules';
import {
  addTaskFormInitialValuesSelector,
  addTaskFormIsLoadingSelector,
} from '@/pages/todo/_redux/add-task-form-module';
import { TaskForm } from '@/pages/todo/page/_components/task-form';
import { getFormSubmitConfig } from '@/pages/todo/page/_components/connected-add-task-form-modal/_components/add-task-form-modal-view/_components/connected-add-task-form-modal/_utils/getFormSubmitConfig';

type PropsType = {
  initialValues: ReturnType<typeof addTaskFormInitialValuesSelector>;
  isLoading: ReturnType<typeof addTaskFormIsLoadingSelector>;
  fetchFormManagerSagaAction: (payload: FormManagerType) => void;
};

class WrappedComponent extends React.Component<PropsType> {
  handleSubmit = (values) => {
    this.props.fetchFormManagerSagaAction(getFormSubmitConfig(values));
  };

  render() {
    return (
      // TaskForm => TaskFormView
      <TaskForm
        initialValues={this.props.initialValues}
        isLoading={this.props.isLoading}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  initialValues: addTaskFormInitialValuesSelector(state),
  isLoading: addTaskFormIsLoadingSelector(state),
});

const mapDispatchToProps = {
  // fetchFormManagerSagaAction => fetchFormManager
  fetchFormManagerSagaAction,
};

export const ConnectedAddTaskForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedComponent);
