import React from 'react';
import { connect } from 'react-redux';
import { AddTaskFormModalView } from '@/pages/todo/page/_components/connected-add-task-form-modal/_components/add-task-form-modal-view';
import {
  closeModalAction,
  modalIsOpenedSelector,
} from '@/_redux/todo-tasks-module';

type PropsType = {
  modalIsOpened: boolean;
  closeModal: () => void;
};

class WrappedComponent extends React.Component<PropsType> {
  handleClose = () => {
    this.props.closeModal();
  };

  render() {
    return (
      <AddTaskFormModalView
        modalIsOpened={this.props.modalIsOpened}
        onModalClose={this.handleClose}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  modalIsOpened: modalIsOpenedSelector(state),
});

const mapDispatchToProps = {
  closeModal: closeModalAction,
};

export const ConnectedAddTaskFormModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedComponent);
