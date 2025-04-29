#!/usr/bin/env node

const [,, command, ...args] = process.argv;
const {
  listTodos,
  addTodo,
  completeTodo,
  deleteTodo,
} = require('./todo');

(async () => {
  switch (command) {
    case 'list':
      await listTodos();
      break;
    case 'add':
      const title = args.join(' ');
      if (!title) return console.log('Please provide a todo title.');
      await addTodo(title);
      break;
    case 'done':
      await completeTodo(parseInt(args[0]));
      break;
    case 'delete':
      await deleteTodo(parseInt(args[0]));
      break;
    default:
      console.log(`
Usage:
  node index.js list               - List all todos
  node index.js add "task"        - Add a new todo
  node index.js done <index>      - Mark todo as completed
  node index.js delete <index>    - Delete a todo
      `);
  }
})();
