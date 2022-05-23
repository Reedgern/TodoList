import React from 'react';
import { connect } from 'react-redux';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import {
  addTaskSagaAction,
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

class WrappedComponent extends React.Component<PropsType> {
  handleFormSubmit: FormSubmitCallbackType = (values, form) => {
    const config = {
      formValues: values,
      showNotification: true,
      textMessageSuccess: 'Форма успешно отправлена!',
      loadingStartAction: setAddTaskFormLoadingStartAction,
      loadingStopAction: setAddTaskFormLoadingFinishAction,
      formRequest: ({ body }) => addTaskRequest(body),
      formSuccessAction: fetchTasksSagaAction,
      callBackOnSuccess: () =>
        form.restart(this.props.addTaskFormInitialValues),
    };
    this.props.fetchForm(config);
  };

  render() {
    return (
      <TasksPageView
        addTaskFormInitialValues={this.props.addTaskFormInitialValues}
        addTaskFormIsLoading={this.props.addTaskFormIsLoading}
        isLoading={this.props.isLoading}
        onFormSubmit={this.handleFormSubmit}
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
  addTaskFormInitialValues: addTaskFormInitialValuesSelector(state),
  addTaskFormIsLoading: addTaskFormIsLoadingSelector(state),
});

const mapDispatchToProps = {
  addNewTask: addTaskSagaAction,
  fetchForm: fetchFormManagerSagaAction,
};

export const ConnectedTasksPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedComponent);
