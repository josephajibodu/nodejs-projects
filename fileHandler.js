const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'todos.json');

async function readTodos() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return []; // fallback if file not found or unreadable
  }
}

async function writeTodos(todos) {
  await fs.writeFile(filePath, JSON.stringify(todos, null, 2));
}

module.exports = { readTodos, writeTodos };
