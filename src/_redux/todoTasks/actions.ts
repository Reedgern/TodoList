import { BaseAction, Action } from '@mihanizm56/redux-core-modules';
import { ITodoState } from '@/_redux/todoTasks/types';

export const GET_TASKS = 'GET_TASKS';
export const getTodoTasksAction: BaseAction = () => ({
  type: GET_TASKS,
});

export const TOGGLE_TASKS_LOADING = 'TOGGLE_TASKS_LOADING';
export const toggleTaskLoading: Action<{ isLoading: boolean }> = ({
  isLoading,
}) => ({
  type: TOGGLE_TASKS_LOADING,
  payload: {
    isLoading,
  },
});

export const SET_TASKS = 'SET_TASKS';
export const setTodoTasksAction: Action<{ tasks: ITodoState['tasks'] }> = ({
  tasks,
}) => ({
  type: SET_TASKS,
  payload: {
    tasks,
  },
});

export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const addNewTaskAction: Action<{
  description: string;
  isCompleted: boolean;
}> = ({ description, isCompleted }) => ({
  type: ADD_NEW_TASK,
  payload: {
    description,
    isCompleted,
  },
});

export const DELETE_TASK = 'DELETE_TASK';
export const deleteTaskAction: Action<{ id: string }> = ({ id }) => ({
  type: DELETE_TASK,
  payload: {
    id,
  },
});

export const UPDATE_TASK = 'UPDATE_TASK';
export const updateTaskAction: Action<{
  id: string;
  description: string;
  isCompleted: boolean;
}> = ({ id, isCompleted, description }) => ({
  type: UPDATE_TASK,
  payload: {
    id,
    description,
    isCompleted,
  },
});

export const ADD_ERROR = 'ADD_ERROR';
export const setErrorAction: Action<{ error: string }> = ({ error }) => ({
  type: ADD_ERROR,
  payload: {
    error,
  },
});

export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const clearErrorsAction: BaseAction = () => ({
  type: CLEAR_ERRORS,
});
