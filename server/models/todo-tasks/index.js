const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const dataJSONFilePath = path.join(
  'server',
  'models',
  'todo-tasks',
  'data.json',
);
const adapter = new FileSync(dataJSONFilePath);
const database = low(adapter);

// Set some defaults
database
  .defaults({
    tasks: [
      {
        id: 'c8ab1e82-afb5-464e-9c84-dc6b311da0e7',
        description: 'Test',
        isCompleted: true,
      },
    ],
  })
  .write();

module.exports.tasksModel = database;
