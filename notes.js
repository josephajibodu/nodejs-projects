const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'data', 'notes.json');

async function loadNotes() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return []; // fallback if file is empty or doesn't exist
  }
}

async function saveNotes(notes) {
  await fs.writeFile(filePath, JSON.stringify(notes, null, 2));
}

async function addNote(title, content) {
  const notes = await loadNotes();
  if (notes.find(note => note.title === title)) {
    console.log(`❌ Note with title "${title}" already exists.`);
    return;
  }

  notes.push({ title, content });
  await saveNotes(notes);
  console.log(`✅ Note "${title}" added.`);
}

async function listNotes() {
  const notes = await loadNotes();
  console.log('\n📋 Your Notes:');
  notes.forEach((note, i) => {
    console.log(`${i + 1}. ${note.title}`);
  });
}

async function readNote(title) {
  const notes = await loadNotes();
  const note = notes.find(note => note.title === title);
  if (!note) {
    console.log(`❌ Note "${title}" not found.`);
    return;
  }

  console.log(`\n📝 ${note.title}:\n${note.content}`);
}

async function deleteNote(title) {
  let notes = await loadNotes();
  const originalLength = notes.length;
  notes = notes.filter(note => note.title !== title);
  if (notes.length === originalLength) {
    console.log(`❌ No note found with title "${title}".`);
    return;
  }

  await saveNotes(notes);
  console.log(`🗑️ Note "${title}" deleted.`);
}

async function updateNote(title, newContent) {
  const notes = await loadNotes();
  const note = notes.find(n => n.title === title);
  if (!note) {
    console.log(`❌ Note "${title}" not found.`);
    return;
  }

  note.content = newContent;
  await saveNotes(notes);
  console.log(`🔄 Note "${title}" updated.`);
}

module.exports = {
  addNote,
  listNotes,
  readNote,
  deleteNote,
  updateNote
};
