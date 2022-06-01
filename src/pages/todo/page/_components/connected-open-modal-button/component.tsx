import React, { Component } from 'react';
import { ButtonLink as OpenModalButtonView } from '@wildberries/ui-kit';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { openModalAction } from '@/_redux/todo-tasks-module';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';

type PropsType = {
  onClick: typeof openModalAction;
};

class WrappedComponent extends Component<PropsType> {
  handleClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <OpenModalButtonView
        fullWidth={false}
        isTextCenter
        onClick={this.handleClick}
        text={i18next.t(TASKS_PAGE_TRANSLATIONS.addTaskFormModalButtonText)}
        type="button"
      />
    );
  }
}

const mapDispatchToProps = {
  onClick: openModalAction,
};

export const ConnectedOpenModalButton = connect(
  null,
  mapDispatchToProps,
)(WrappedComponent);
