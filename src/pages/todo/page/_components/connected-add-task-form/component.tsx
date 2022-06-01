import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchFormManagerSagaAction,
  FormManagerType,
} from '@mihanizm56/redux-core-modules';
import { AddTaskFormView } from '@/pages/todo/page/_components/connected-add-task-form/_components/add-task-form-view';
import {
  closeModalAction,
  isModalOpenedSelector,
} from '@/_redux/todo-tasks-module';
import {
  addTaskFormInitialValuesSelector,
  addTaskFormIsLoadingSelector,
} from '@/pages/todo/_redux/add-task-form-module';
import { getFormSubmitConfig } from '@/pages/todo/page/_components/connected-add-task-form/_components/add-task-form-view/_utils/get-form-submit-config';
import { AddTaskFormValuesType } from '@/pages/todo/_types';

type PropsType = {
  isModalOpened: ReturnType<typeof isModalOpenedSelector>;
  closeModal: () => void;
  isFormLoading: ReturnType<typeof addTaskFormIsLoadingSelector>;
  formInitialValues: ReturnType<typeof addTaskFormInitialValuesSelector>;
  fetchFormManager: (payload: FormManagerType) => void;
};

class WrappedComponent extends Component<PropsType> {
  handleClose = () => {
    this.props.closeModal();
  };

  handleSubmit = (values: AddTaskFormValuesType) => {
    const formSubmitConfig = getFormSubmitConfig(values);
    this.props.fetchFormManager(formSubmitConfig);
  };

  render() {
    return (
      <AddTaskFormView
        formInitialValues={this.props.formInitialValues}
        isFormLoading={this.props.isFormLoading}
        isModalOpened={this.props.isModalOpened}
        onModalClose={this.handleClose}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isModalOpened: isModalOpenedSelector(state),
  formInitialValues: addTaskFormInitialValuesSelector(state),
  isFormLoading: addTaskFormIsLoadingSelector(state),
});

const mapDispatchToProps = {
  closeModal: closeModalAction,
  fetchFormManager: fetchFormManagerSagaAction,
};

export const ConnectedAddTaskForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedComponent);
