# 📝 Notes API

A RESTful Notes API built using **Node.js**, **Express.js**, and **MongoDB**.  
This backend application provides full CRUD (Create, Read, Update, Delete) functionality for managing notes.

---

## 🚀 Features

- Create a new note
- Get all notes
- Get a single note by ID
- Update a note
- Delete a note
- MongoDB integration using Mongoose
- JSON request handling with Express middleware

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- ES Modules

---

## 📂 Project Structure

```
Notes_API/
│── model/
│    └── Notes.js
│── index.js
│── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd Notes_API
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start MongoDB

Make sure MongoDB is running locally:

```
mongodb://localhost:27017/
```

### 4️⃣ Run the server

```bash
node index.js
```

Server will run on:

```
http://localhost:3000
```

---

## 📌 API Endpoints

### ➤ Create Note
**POST** `/notes`

```json
{
  "title": "Sample Title",
  "content": "Sample Content"
}
```

---

### ➤ Get All Notes
**GET** `/notes`

---

### ➤ Get Note by ID
**GET** `/notes/:id`

---

### ➤ Update Note
**PUT** `/notes/:id`

```json
{
  "title": "Updated Title",
  "content": "Updated Content"
}
```

---

### ➤ Delete Note
**DELETE** `/notes/:id`

---

## 🧠 Schema Structure

```js
{
  title: String,
  content: String,
  createdAt: Date
}
```

- `title` → Required
- `content` → Required
- `createdAt` → Defaults to current date

---

## 🎯 Purpose of Project

This project was built to understand:

- REST API architecture
- Express routing
- MongoDB integration
- Mongoose schema modeling
- CRUD operations in backend development

---

## 📌 Future Improvements

- Add authentication (JWT)
- Add validation middleware
- Add environment variables (.env)
- Deploy to cloud (Render / Railway / AWS)

---

## 👩‍💻 Author

Prachi Dhiman  
B.Tech CSE Student  
Aspiring Software Developer

---
