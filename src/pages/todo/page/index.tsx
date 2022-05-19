import React from 'react';
import { connect } from 'react-redux';
import {
  addTaskSagaAction,
  errorsSelector,
  isLoadingSelector,
  tasksSelector,
  TaskStoragePartType,
} from '@/_redux/todo-tasks-module';
import { TasksPageView } from '@/pages/todo/page/_components/tasks-page-view';
import { DispatchPropsType, StatePropsType } from '@/pages/todo/page/types';
import { FormSubmitCallbackType } from '@/pages/todo/page/_components/tasks-page-view/_components/task-form/types';

type PropsType = StatePropsType & DispatchPropsType;

class WrappedComponent extends React.Component<PropsType> {
  formHandleSubmit: FormSubmitCallbackType = (values, form) => {
    form.reset();
    this.props.addNewTask({
      description: values.description,
      isCompleted: values.isCompleted,
    });
  };

  render() {
    return (
      <TasksPageView
        errors={this.props.errors}
        formHandleSubmit={this.formHandleSubmit}
        isLoading={this.props.isLoading}
        tasks={this.props.tasks}
      />
    );
  }
}

const mapStateToProps = (state: TaskStoragePartType): StatePropsType => ({
  tasks: tasksSelector(state),
  isLoading: isLoadingSelector(state),
  errors: errorsSelector(state),
});

const mapDispatchToProps = {
  addNewTask: addTaskSagaAction,
};

export const ConnectedTasksPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedComponent);
