import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import classnames from 'classnames/bind';
import {
  addTaskSagaAction,
  deleteTaskSagaAction,
  errorsSelector,
  fetchTasksSagaAction,
  isLoadingSelector,
  tasksSelector,
} from '@/_redux/todo-tasks-module';
import { TasksList } from '@/pages/todo/page/_components/tasksList';
import { TaskForm } from '@/pages/todo/page/_components/taskForm';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const mapStateToProps = (state) => ({
  tasks: tasksSelector(state),
  isLoading: isLoadingSelector(state),
  errors: errorsSelector(state),
});

const mapDispatchToProps = {
  getTasks: fetchTasksSagaAction,
  deleteTask: deleteTaskSagaAction,
  addNewTask: addTaskSagaAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsType = ConnectedProps<typeof connector>;

class TodoListPage extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getTasks();
  }

  onHandleSubmit = (values, form) => {
    form.reset();
    this.props.addNewTask({
      description: values.description,
      isCompleted: values.isCompleted,
    });
  };

  render() {
    return (
      <div className={cn('wrapper')}>
        <div>
          {this.props.errors.length > 0 &&
            this.props.errors.map((error, index) => (
              <div key={index} className={cn('error')}>
                {error}
              </div>
            ))}
          {this.props.isLoading || !this.props.tasks ? (
            <h1>Loading...</h1>
          ) : (
            <TasksList
              handleRemove={this.props.deleteTask}
              tasks={this.props.tasks}
            />
          )}
        </div>
        <div>
          Создать новую таску:
          <br />
          <TaskForm
            onCancel={(form) => form.reset()}
            onSubmit={this.onHandleSubmit}
          />
        </div>
      </div>
    );
  }
}

export const ConnectedTodoListPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListPage);
