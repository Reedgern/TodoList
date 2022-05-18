import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import classnames from 'classnames/bind';
import {
  addNewTaskAction,
  deleteTaskAction,
  errorSelector,
  getTodoTasksAction,
  isLoadingSelector,
  tasksSelector,
} from '@/_redux/todoTasks';
import { TasksList } from '@/pages/todo/page/_components/tasksList';
import { TaskForm } from '@/pages/todo/page/_components/taskForm';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const mapStateToProps = (state) => ({
  tasks: tasksSelector(state),
  isLoading: isLoadingSelector(state),
  errors: errorSelector(state),
});

const mapDispatchToProps = {
  getTodoTasks: getTodoTasksAction,
  deleteTask: deleteTaskAction,
  addNewTask: addNewTaskAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsType = ConnectedProps<typeof connector>;

class TodoListPage extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getTodoTasks();
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
