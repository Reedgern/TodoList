import React from 'react';
import { ButtonLink } from '@wildberries/ui-kit';
// import { ButtonLink as OpenModalButtonView } from '@wildberries/ui-kit';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { openModalAction } from '@/_redux/todo-tasks-module';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';

type PropsType = {
  onClick: () => void;
};

class WrappedComponent extends React.Component<PropsType> {
  handleClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      // ButtonLink => OpenModalButtonView
      <ButtonLink
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
