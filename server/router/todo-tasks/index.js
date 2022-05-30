const express = require('express');
const {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} = require('../../controllers/todo-tasks');

const tasksRouter = express.Router();

// get
tasksRouter.get('/get', getTasks);

// post
tasksRouter.post('/create', createTask);

// delete
tasksRouter.post('/delete', deleteTask);

// update
tasksRouter.post('/update', updateTask);

module.exports.tasksRouter = tasksRouter;
