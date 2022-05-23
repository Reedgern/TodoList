import React from 'react';
import { connect } from 'react-redux';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import {
  addTaskSagaAction,
  errorsSelector,
  fetchTasksSagaAction,
  isLoadingSelector,
  tasksSelector,
  TaskStoragePartType,
} from '@/_redux/todo-tasks-module';
import { TasksPageView } from '@/pages/todo/page/_components/tasks-page-view';
import { DispatchPropsType, StatePropsType } from '@/pages/todo/page/types';
import { FormSubmitCallbackType } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/types';
import { addTaskRequest } from '@/api/requests/add-task';
import {
  addTaskFormIsLoadingSelector,
  AddTaskFormStorageTypePart,
  setAddTaskFormLoadingFinishAction,
  setAddTaskFormLoadingStartAction,
} from '@/pages/todo/page/_redux/add-task-form-module';

type PropsType = StatePropsType & DispatchPropsType;

class WrappedComponent extends React.Component<PropsType> {
  // handleSubmit/handleFormSubmit
  // методы, передаваемые на компонент = handle (handleClick)
  // методы, принимаемые компонентом = on (onClick)
  // <SomeComponent onClick={this.handleClick}/>
  formHandleSubmit: FormSubmitCallbackType = (values, form) => {
    this.props.fetchForm({
      formValues: values,
      showNotification: true,
      textMessageSuccess: 'Форма успешно отправлена!',
      loadingStartAction: setAddTaskFormLoadingStartAction,
      loadingStopAction: setAddTaskFormLoadingFinishAction,
      formRequest: ({ body }) => addTaskRequest(body),
      formSuccessAction: fetchTasksSagaAction,
    });
  };

  render() {
    return (
      <TasksPageView
        addTaskFormIsLoading={this.props.addTaskFormIsLoading}
        errors={this.props.errors}
        formHandleSubmit={this.formHandleSubmit}
        isLoading={this.props.isLoading}
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
  errors: errorsSelector(state),
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
