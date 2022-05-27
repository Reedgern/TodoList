import React from 'react';
import { connect } from 'react-redux';
import { OpenAddTaskFormModalButtonView } from '@/pages/todo/page/_components/connected-open-add-task-form-modal-button/_components/open-add-task-form-modal-button-view';
import {
  closeModalAction,
  modalIsOpenedSelector,
  openModalAction,
} from '@/_redux/todo-tasks-module';

type PropsType = {
  modalIsOpened: boolean;
  closeModal: () => void;
  openModal: () => void;
};

// eslint-disable-next-line react/prefer-stateless-function
class WrappedComponent extends React.Component<PropsType> {
  handleClose = () => {
    this.props.closeModal();
  };

  render() {
    return (
      // too long name
      <OpenAddTaskFormModalButtonView
        // не передаем анпрямую экшены
        // через метод в классе обязательно
        modalIsOpened={this.props.modalIsOpened}
        onClick={this.props.openModal}
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
  openModal: openModalAction,
};

// too long name
export const ConnectedOpenAddTaskFormModalButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedComponent);
