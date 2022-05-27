import React from 'react';
import { connect } from 'react-redux';
import {
  fetchFormManagerSagaAction,
  FormManagerType,
} from '@mihanizm56/redux-core-modules';
import {
  addTaskFormInitialValuesSelector,
  addTaskFormIsLoadingSelector,
  setAddTaskFormLoadingFinishAction,
  setAddTaskFormLoadingStartAction,
} from '@/pages/todo/_redux/add-task-form-module';
import { addTaskRequest } from '@/api/requests/add-task';
import {
  closeModalAction,
  fetchTasksSagaAction,
} from '@/_redux/todo-tasks-module';
import { TaskForm } from '@/pages/todo/page/_components/task-form';
import { FormValuesType } from '@/pages/todo/page/_components/task-form/_types';

type PropsType = {
  initialValues: FormValuesType;
  isLoading: boolean;
  fetchFormManagerSagaAction: (payload: FormManagerType) => void;
};

class WrappedComponent extends React.Component<PropsType> {
  handleSubmit = (values) => {
    // вынести конфиг в константы и за компонент
    const config: FormManagerType = {
      formValues: values,
      showNotification: true,
      textMessageSuccess: 'Форма успешно отправлена!',
      titleMessageError: 'Ошибка отправки формы',
      loadingStartAction: setAddTaskFormLoadingStartAction,
      loadingStopAction: setAddTaskFormLoadingFinishAction,
      formRequest: ({ body }) => addTaskRequest(body),
      formSuccessActionsArray: [fetchTasksSagaAction, closeModalAction],
    };
    this.props.fetchFormManagerSagaAction(config);
  };

  render() {
    return (
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
  fetchFormManagerSagaAction,
};

export const ConnectedAddTaskForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedComponent);
