<pre>
note-manager/
├── index.js
├── notes.js
└── data/
    └── notes.json
</pre>

Sure! Here’s a clear, descriptive assignment prompt you can give to your students to guide them in building the File-Based Note Manager. This version assumes they already know JavaScript well and are comfortable with async/await, modules, and file handling in Node.js.

⸻

# 📝 Assignment: File-Based Note Manager (Node.js CLI App)

**📌 Objective:**

Build a Command-Line Note Manager using Node.js (without any frameworks like Express) that allows a user to create, read, update, delete, and list notes. All notes must be stored in a local .json file, simulating a simple database.

⸻

**🔧 Requirements:**
1.	File-Based Storage
    • Store notes in a local notes.json file inside a data/ folder.
    • Notes should be saved as an array of objects, each with at least:

```json
{
  title: string,
  content: string
}
```
2.	Features to Implement (CRUD):
    • add: Add a new note (must have a unique title).
    • list: Display all note titles.
    • read: Read the full content of a specific note by title.
    • delete: Delete a note by title.
    • update: Update the content of an existing note.
  	
4.	CLI Interface
    • Use Node’s built-in readline module to interact with the user.
    • Accept commands like:

```bash
> Enter command: add
> Title: My Note
> Content: This is the content of the note.
```

• After executing a command, prompt the user again for the next action.
• Include an exit command to end the program gracefully.

4.	Code Organization
    • Separate logic into different files:
    • index.js: Main CLI logic and prompt flow
    • notes.js: All file and note-related logic (loading, saving, CRUD operations)

**✅ Functional Example:**

```bash
> Enter command: add
> Title: Shopping
> Content: Buy eggs, milk, and bread.
✅ Note "Shopping" added.

> Enter command: list
📋 Your Notes:
1. Shopping

> Enter command: read
> Title to read: Shopping
📝 Shopping:
Buy eggs, milk, and bread.

> Enter command: update
> Title to update: Shopping
> New content: Buy eggs, milk, bread, and cheese.
🔄 Note "Shopping" updated.

> Enter command: delete
> Title to delete: Shopping
🗑️ Note "Shopping" deleted.

> Enter command: exit
👋 Goodbye!
```


**💡 Bonus (Optional Enhancements):**
	•	Add timestamps to each note (createdAt, updatedAt)
	•	Prevent empty titles or content from being saved
	•	Display colored CLI output using chalk (if you want them to explore packages)
	•	Validate user input to improve UX

**📦 Deliverables:**
	•	Project folder with:
	•	index.js
	•	notes.js
	•	data/notes.json
	•	Code should be well-commented and organized
	•	Submit via GitHub or ZIP file
