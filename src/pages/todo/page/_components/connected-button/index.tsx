import React from 'react';
import { connect } from 'react-redux';
import { ButtonView } from '@/pages/todo/page/_components/connected-button/_components/button-view';
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
  render() {
    return (
      <ButtonView
        modalIsOpened={this.props.modalIsOpened}
        onClick={this.props.openModal}
        onModalClose={this.props.closeModal}
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

export const ConnectedButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedComponent);
