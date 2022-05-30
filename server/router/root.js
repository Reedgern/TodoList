const express = require('express');
const { tasksRouter } = require('./todo-tasks');
const { i18nRouter } = require('./i18n');

const rootRouter = express.Router();

rootRouter.use('/tasks', tasksRouter);
rootRouter.use('/I18N', i18nRouter);

module.exports.rootRouter = rootRouter;
