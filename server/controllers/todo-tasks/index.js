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
      const data = await tasksModel.get('tasks');
      res.status(200).json({
        tasks: data,
      });
    },
    () => {
      res.status(500).json({
        error: 'Ошибка при запросе получения тасок.',
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
        newTask,
      });
    },
    () => {
      res.status(500).json({
        error: 'Ошибка при создании новой таски.',
      });
    },
  );
};

const deleteTask = async (req, res) => {
  randomize(
    async () => {
      await tasksModel.get('tasks').remove({ id: req.body.id }).write();
      res.status(200).json({
        id: req.body.id,
      });
    },
    () => {
      res.status(500).json({
        error: `Ошибка при удалении таски с id ${req.body.id}.`,
      });
    },
  );
};

const updateTask = async (req, res) => {
  const task = tasksModel.get('tasks').find({ id: req.body.id });

  if (!task.value()) {
    setTimeout(() => {
      res.status(500).json({
        error: `Ошибка при изменении объекта: в базе нет объекта с id ${req.body.id}.`,
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
      updatedTask,
    });
  }, 1000);
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
};
