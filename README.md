# Next.js User CRUD App

This project is a simple User CRUD application built using Next.js (App Router) and JSONPlaceholder API. It demonstrates core CRUD operations with optimistic UI updates.

## 🚀 Live Demo

https://user-management-nextjs.vercel.app

## 📂 GitHub Repository

https://github.com/ankit3128/user-management-nextjs

---

## 📌 Features

* Fetch all users
* View individual user details
* Update user information (optimistic UI)
* Delete user (optimistic UI)
* Client-side routing using Next.js App Router

---

## 🛠 Tech Stack

* Next.js (App Router)
* React
* Axios
* Tailwind CSS

---

## 🌐 API Used

Base URL:
https://jsonplaceholder.typicode.com

Endpoints used:

* GET /users
* GET /users/:id
* PUT /users/:id
* DELETE /users/:id

---

## ⚡ Optimistic Updates

This project uses optimistic UI updates:

* UI updates immediately before API response
* If the request fails, previous state is restored

---

## ⚠️ Note

JSONPlaceholder is a mock API, so:

* Changes are not permanently saved
* Data resets after refresh

---

## ▶️ Run Locally

npm install
npm run dev

Then open:
http://localhost:3000/users

---

## 📁 Project Structure

app/
├── lib/
│    ├── axios.js
│    └── usersApi.js
├── users/
│    ├── page.jsx
│    └── [id]/
│         └── page.jsx

---

## 🙌 Author

Ankit Singh
