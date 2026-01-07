# 📝 Full-Stack Notes Application

This project is a **full-stack Notes application** developed as part of an **internship assignment**.  
It demonstrates practical knowledge of **frontend development**, **backend API creation**, and **database integration** using modern web technologies.

---

## 📌 Project Overview

The Notes App allows users to manage notes with full **CRUD (Create, Read, Update, Delete)** functionality.  
Each note contains a title, content, and creation timestamp, and all data is stored persistently in MongoDB.

The application is built using **Next.js**, where both frontend and backend logic are handled within a single project using API routes.

---

## 🚀 Features Implemented

- Create a new note  
- View all saved notes  
- Edit an existing note  
- Delete a note  
- Automatic timestamp for each note  

---

## 🛠 Tech Stack

- **Frontend:** Next.js (App Router), React
- **Backend:** Next.js API Routes (Server-side logic)
- **Database:** MongoDB Atlas
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## 🧠 Key Concepts Demonstrated

- Full-stack application architecture using Next.js  
- RESTful API design (GET, POST, PUT, DELETE)  
- MongoDB integration with Mongoose  
- State management using React hooks  
- Environment variable handling  
- Clean and modular project structure  

---

## 📁 Project Structure
```md
notes-app/
├── app/
│ ├── api/notes/route.js # Backend API routes
│ ├── page.js # Main UI page
│ ├── layout.js # Root layout
│ └── globals.css
├── components/
│ ├── NoteForm.jsx # Create/Edit note form
│ └── NoteList.jsx # Notes list UI
├── lib/
│ └── mongodb.js # MongoDB connection logic
├── models/
│ └── Note.js # Mongoose schema
├── .env.local
├── package.json
└── README.md
```
🌐 Live Deployment

The project is deployed on Vercel.

🔗 Live URL: https://your-vercel-link.vercel.app

🔗 API Endpoints

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/api/notes` | Fetch all notes         |
| POST   | `/api/notes` | Create a new note       |
| PUT    | `/api/notes` | Update an existing note |
| DELETE | `/api/notes` | Delete a note           |


🎯 Internship Objective

This project was created to demonstrate my ability to:

Build a complete full-stack application

Design and consume REST APIs

Integrate a NoSQL database

Write clean, maintainable code

Deploy a production-ready application

📄 Note

This project is developed solely for educational and internship evaluation purposes.


