const express = require('express');
const {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} = require('../../controllers/todo-tasks');

const tasksRouter = express.Router();

tasksRouter.get('/', getTasks);
tasksRouter.post('/', createTask);
tasksRouter.delete('/', deleteTask);
tasksRouter.put('/', updateTask);

module.exports.tasksRouter = tasksRouter;
