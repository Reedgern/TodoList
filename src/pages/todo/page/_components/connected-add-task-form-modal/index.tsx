import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchFormManagerSagaAction,
  FormManagerType,
} from '@mihanizm56/redux-core-modules';
import { AddTaskFormModalView } from '@/pages/todo/page/_components/connected-add-task-form-modal/_components/add-task-form-modal-view';
import {
  closeModalAction,
  isModalOpenedSelector,
} from '@/_redux/todo-tasks-module';
import {
  addTaskFormInitialValuesSelector,
  addTaskFormIsLoadingSelector,
} from '@/pages/todo/_redux/add-task-form-module';
import { AddTaskFormValuesType } from '@/pages/todo/page/_components/task-form-view/_types';
import { getFormSubmitConfig } from '@/pages/todo/page/_components/connected-add-task-form-modal/_components/add-task-form-modal-view/_utils/get-form-submit-config';

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
    this.props.fetchFormManager(getFormSubmitConfig(values));
  };

  render() {
    return (
      <AddTaskFormModalView
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

export const ConnectedAddTaskFormModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedComponent);
