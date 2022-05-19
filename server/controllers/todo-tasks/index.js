const { nanoid } = require('nanoid');
const { tasksModel } = require('../../models/todo-tasks');

const randomize = (
  successCallback,
  errorCallback,
  delay = 1000,
  successProb = 0.8,
) => {
  if (Math.random() < successProb) {
    setTimeout(successCallback, delay);

    return;
  }
  setTimeout(errorCallback, delay);
};

const getTasks = async (req, res) => {
  randomize(
    async () => {
      const tasks = await tasksModel.get('tasks');
      res.status(200).json({
        data: { tasks },
        error: false,
        errorText: '',
        additionalErrors: [],
      });
    },
    () => {
      res.status(500).json({
        data: null,
        error: true,
        errorText: 'Ошибка при запросе получения тасок.',
        additionalErrors: [],
      });
    },
  );
};

const createTask = async (req, res) => {
  randomize(
    async () => {
      const newTask = {
        id: nanoid(),
        description: req.body.description,
        isCompleted: req.body.isCompleted,
      };

      await tasksModel.get('tasks').push(newTask).write();

      res.status(200).json({
        data: { newTask },
        error: false,
        errorText: '',
        additionalErrors: [],
      });
    },
    () => {
      res.status(500).json({
        data: null,
        error: true,
        errorText: 'Ошибка при создании новой таски.',
        additionalErrors: [],
      });
    },
  );
};

const deleteTask = async (req, res) => {
  randomize(
    async () => {
      await tasksModel.get('tasks').remove({ id: req.body.id }).write();
      res.status(200).json({
        data: { id: req.body.id },
        error: false,
        errorText: '',
        additionalErrors: [],
      });
    },
    () => {
      res.status(500).json({
        data: null,
        errorText: `Ошибка при удалении таски с id ${req.body.id}.`,
        error: true,
        additionalErrors: [],
      });
    },
  );
};

const updateTask = async (req, res) => {
  const task = tasksModel.get('tasks').find({ id: req.body.id });

  if (!task.value()) {
    setTimeout(() => {
      res.status(500).json({
        data: null,
        error: true,
        errorText: `Ошибка при изменении объекта: в базе нет объекта с id ${req.body.id}.`,
        additionalErrors: [],
      });
    }, 1000);

    return;
  }

  await task
    .assign({
      description: req.body.description,
      isCompleted: req.body.isCompleted || false,
    })
    .write();

  const updatedTask = tasksModel.get('tasks').find({ id: req.body.id });

  setTimeout(() => {
    res.status(200).json({
      data: { updatedTask },
      error: false,
      errorText: '',
      additionalErrors: [],
    });
  }, 1000);
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
};
