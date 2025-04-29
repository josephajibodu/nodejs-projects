
# 🛠️ Assignment: Barebones REST API Without a Framework

## 🎯 Objective
Build a simple RESTful API using only **Node.js core modules** (i.e., without using Express or any other external web framework). This assignment is designed to help you understand how routing, HTTP methods, and request/response handling work under the hood in Node.js.

---

## 📚 What You Will Learn
- How HTTP works in Node.js
- Manual routing using the `http` module
- Parsing URLs, query parameters, and JSON request bodies
- Handling HTTP methods (GET, POST, PUT, DELETE)
- Structuring a simple API without external libraries

---

## 🗂️ Task Requirements

Create an API for managing a list of **"Tasks"** with the following structure:

```json
{
  "id": 1,
  "title": "Write Node.js assignment",
  "completed": false
}
```

API Endpoints

Method	Route	Description
GET	/tasks	Get all tasks
GET	/tasks/:id	Get a specific task by ID
POST	/tasks	Create a new task
PUT	/tasks/:id	Update a task by ID
DELETE	/tasks/:id	Delete a task by ID


## ✅ Functionality Checklist
•	Store tasks in-memory (using an array; no database needed)
•	Use http.createServer() to create your server
•	Parse URL and query parameters using the url module
•	Handle JSON request bodies and responses (Content-Type: application/json)
•	Generate unique ids for tasks (use a counter or Date.now())
•	Handle invalid routes and methods gracefully
•	Return appropriate HTTP status codes and JSON responses

## 🧩 Example Scenarios

```
POST /tasks

Request Body:


{
  "title": "Learn Node.js"
}

Response:

{
  "id": 1,
  "title": "Learn Node.js",
  "completed": false
}
```

```
PUT /tasks/1

Request Body:

{
  "title": "Learn Node.js Basics",
  "completed": true
}

Response:

{
  "id": 1,
  "title": "Learn Node.js Basics",
  "completed": true
}
```


## 🔖 Constraints
•	❌ Do NOT use any frameworks like Express
•	✅ Only use Node.js built-in modules:
•	http
•	fs
•	url
•	path
•	querystring

## 📂 Suggested File Structure

```
/barebones-rest-api
├── server.js
├── routes/
│   └── tasks.js (optional modular routing)
├── utils/
│   └── helpers.js (for body parsing, sendResponse, etc.)
```

## 🧪 Bonus Challenges
•	Persist tasks using fs to save/load from a .json file
•	Add basic logging (console output of method + URL)
•	Validate request body (e.g., reject empty titles)
•	Create a basic client interface using HTML (optional)


## 🧭 Evaluation Criteria

Criteria	Weight
Correct use of Node.js core	✅
Working CRUD operations	✅
Proper HTTP status codes	✅
Error handling	✅
Code readability	✅
Bonus: Data persistence	🎯
Bonus: Modular structure	🎯


## 🚀 Submission Instructions
•	Push your code to a GitHub repository
•	Include this README in your project
•	Share the GitHub repo link when you’re done
