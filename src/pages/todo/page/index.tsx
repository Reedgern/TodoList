import React from 'react';
import { connect } from 'react-redux';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import {
  fetchTasksSagaAction,
  isLoadingSelector,
  tasksSelector,
  TaskStoragePartType,
} from '@/_redux/todo-tasks-module';
import { TasksPageView } from '@/pages/todo/page/_components/tasks-page-view';
import { DispatchPropsType, StatePropsType } from '@/pages/todo/page/_types';
import { FormSubmitCallbackType } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/_types';
import { addTaskRequest } from '@/api/requests/add-task';
import {
  addTaskFormInitialValuesSelector,
  addTaskFormIsLoadingSelector,
  AddTaskFormStorageTypePart,
  setAddTaskFormLoadingFinishAction,
  setAddTaskFormLoadingStartAction,
} from '@/pages/todo/page/_redux/add-task-form-module';

type PropsType = StatePropsType & DispatchPropsType;
type StateType = {
  formIsOpened: boolean;
};

class WrappedComponent extends React.Component<PropsType, StateType> {
  state: StateType = {
    formIsOpened: false,
  };

  handleFormSubmit: FormSubmitCallbackType = (values, form) => {
    const config = {
      formValues: values,
      showNotification: true,
      textMessageSuccess: 'Форма успешно отправлена!',
      loadingStartAction: setAddTaskFormLoadingStartAction,
      loadingStopAction: setAddTaskFormLoadingFinishAction,
      formRequest: ({ body }) => addTaskRequest(body),
      formSuccessAction: fetchTasksSagaAction,
      callBackOnSuccess: () => {
        form.restart(this.props.formInitialValues);
        this.setState({ formIsOpened: false });
      },
    };
    this.props.fetchForm(config);
  };

  handleToggleFormModal = (isOpened) =>
    this.setState({ formIsOpened: isOpened });

  render() {
    return (
      <TasksPageView
        formInitialValues={this.props.formInitialValues}
        formIsLoading={this.props.formIsLoading}
        formModalIsOpened={this.state.formIsOpened}
        isLoading={this.props.isLoading}
        onFormSubmit={this.handleFormSubmit}
        onToggleFormModal={this.handleToggleFormModal}
        tasks={this.props.tasks}
      />
    );
  }
}

const mapStateToProps = (
  state: TaskStoragePartType & AddTaskFormStorageTypePart,
): StatePropsType => ({
  tasks: tasksSelector(state),
  isLoading: isLoadingSelector(state),
  formInitialValues: addTaskFormInitialValuesSelector(state),
  formIsLoading: addTaskFormIsLoadingSelector(state),
});

const mapDispatchToProps = {
  fetchForm: fetchFormManagerSagaAction,
};

export const ConnectedTasksPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedComponent);
