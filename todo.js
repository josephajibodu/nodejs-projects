const { readTodos, writeTodos } = require('./utils/fileHandler');
const { v4: uuidv4 } = require('uuid');

async function listTodos() {
  const todos = await readTodos();
  if (todos.length === 0) {
    console.log('No todos yet.');
  } else {
    todos.forEach((todo, index) => {
      const status = todo.completed ? '✔️' : '❌';
      console.log(`${index + 1}. ${todo.title} [${status}]`);
    });
  }
}

async function addTodo(title) {
  const todos = await readTodos();
  todos.push({ id: uuidv4(), title, completed: false });
  await writeTodos(todos);
  console.log('Todo added.');
}

async function completeTodo(index) {
  const todos = await readTodos();
  if (todos[index - 1]) {
    todos[index - 1].completed = true;
    await writeTodos(todos);
    console.log('Todo marked as completed.');
  } else {
    console.log('Invalid index.');
  }
}

async function deleteTodo(index) {
  const todos = await readTodos();
  if (todos[index - 1]) {
    todos.splice(index - 1, 1);
    await writeTodos(todos);
    console.log('Todo deleted.');
  } else {
    console.log('Invalid index.');
  }
}

module.exports = {
  listTodos,
  addTodo,
  completeTodo,
  deleteTodo,
};
