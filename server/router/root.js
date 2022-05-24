const express = require('express');
const { tasksRouter } = require('./todo-tasks');

const rootRouter = express.Router();

rootRouter.use('/tasks', tasksRouter);

module.exports.rootRouter = rootRouter;
