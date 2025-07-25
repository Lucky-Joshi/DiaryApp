# DiaryAppV7 📝

A modern, full-featured diary web application with authentication, rich journal editing, mood tracking, and user-specific CRUD operations.

---

## 🚀 Tech Stack

### Frontend

* React (Vite)
* React Router DOM
* Axios
* CSS3 (no Tailwind)

### Backend

* Node.js
* Express.js
* JWT (Custom Auth)

### Database

* MongoDB + Mongoose

---

## 📦 Features

### ✅ Authentication

* Custom Login/Signup system using JWT
* User session storage in localStorage
* UUID fallback for guests

### 📝 Diary

* Add, edit, delete, and view diary entries
* Filter entries by date and mood
* Notepad-style UI with font styling tools
* Calendar view

### 🌤️ Mood Tracker

* Emojis or labels to indicate daily mood per entry

### 🧾 User Dashboard

* Top-left: User ID
* Top-right: Add Entry button
* Center: List of entries
* Bottom-right: Logout button

### 🔐 Protected Routes

* Pages accessible only when logged in
* JWT validated on frontend + backend

---

## 🧪 Thunder Client API Testing

### 📁 Collections

* `users` (for auth)
* `entries` (user diary entries)

### 📌 Auth Routes

* `POST /api/auth/register` – Register new user
* `POST /api/auth/login` – Login with email & password
* `GET /api/auth/user` – Get current user info (JWT required)

### 📌 Entry Routes

* `GET /api/entries` – Get all entries (filtered by email or UUID)
* `POST /api/entries` – Add new entry
* `PUT /api/entries/:id` – Update entry
* `DELETE /api/entries/:id` – Delete entry

> All entry routes are secured and require a valid JWT.

---

## 🔧 Project Setup

```bash
# 1. Clone repo
https://github.com/yourusername/DiaryAppV7.git

# 2. Backend Setup
cd backend
npm install

# Add your .env file
PORT=5000
MONGO_URI=mongodb://localhost:27017/diaryapp
JWT_SECRET=yourSecretKey

npm run dev

# 3. Frontend Setup
cd frontend
npm install
npm run dev
```

---

## 🧠 Architecture & Flow

```text
┌────────────┐ 
│  Browser   │
│ (React UI) │
└────┬───────┘
     │
┌────▼────────────────────────────┐
│           Frontend              │
│  - Auth Forms (Login, Signup)   │
│  - Journal Entry Editor         │
│  - Mood Filters / Dashboard     │
└──────────────┬──────────────────┘
               │ Axios Calls
               ▼
     ┌────────────────────┐
     │     Backend API    │
     │ (Express + JWT)    │
     ├────────────────────┤
     │ - /auth/* routes   │
     │ - /entries/* routes│
     └────────────────────┘
               │
         Mongoose ODM
               ▼
     ┌────────────────────┐
     │     MongoDB        │
     │  (users, entries)  │
     └────────────────────┘
```

---

## 📸 Screenshots

(coming soon)

---

## 📄 License

MIT

---

> Made with ❤️ by Lucky
