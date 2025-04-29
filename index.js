const readline = require('readline');
const {
  addNote,
  listNotes,
  readNote,
  deleteNote,
  updateNote
} = require('./notes');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  console.log('🗂️ Welcome to Note Manager!\n');
  console.log('Commands: add, list, read, delete, update, exit\n');

  while (true) {
    const command = await ask('> Enter command: ');

    switch (command.trim().toLowerCase()) {
      case 'add':
        const title = await ask('Title: ');
        const content = await ask('Content: ');
        await addNote(title, content);
        break;

      case 'list':
        await listNotes();
        break;

      case 'read':
        const readTitle = await ask('Title to read: ');
        await readNote(readTitle);
        break;

      case 'delete':
        const deleteTitle = await ask('Title to delete: ');
        await deleteNote(deleteTitle);
        break;

      case 'update':
        const updateTitle = await ask('Title to update: ');
        const newContent = await ask('New content: ');
        await updateNote(updateTitle, newContent);
        break;

      case 'exit':
        rl.close();
        console.log('👋 Goodbye!');
        return;

      default:
        console.log('❓ Unknown command.');
    }

    console.log(); // space after each action
  }
}

main();
