# CodeQuest – Research Project

https://github.com/user-attachments/assets/6e7fb96b-9391-4f74-96d7-aa7e066456c5

## Team Members

| Name                      | Student ID |
|---------------------------|:----------:|
| Mohamed Gueye             | 40247476   |
| Mouhamed Kairson Coundoul | 40248237   |
| Youssef Francis           | 40246559   |
| Adja Bineta Boye          | 40281923   |

---

## Project Overview

**CodeQuest** is a web-based platform built for students in **SOEN 357: User Interface Design** at **Concordia University** (Winter 2025). It’s designed to boost the learning experience for software engineering students through interactive coding challenges, intuitive collaboration tools, and a modern, responsive interface.

Developed using **Agile methodologies**, the project emphasizes **usability**, **accessibility**, and **user-centered design**.

---

## Key Features

- **Secure Authentication**
  
- **Collaborative Coding**
  - Real-time code editor with instant feedback and team support

- **Project & Assignment Management**
  - Easy organization and submission tracking

- **Tech Stack**
  - **Frontend:** React + Vite  
  - **Backend:** Node.js + Express  
  - **Database:** MongoDB

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/codequest.git
cd codequest
```

### 2. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Configure Environment Variables

In the `backend` directory, create a `.env` file with:

```env
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB URI.

### 4. Run the Application

Start the backend server:

```bash
cd backend
nodemon index.js
```

Start the frontend dev server:

```bash
cd ../frontend
npm run dev
```

Then open the app in your browser at:  
**http://localhost:5173**

---

## Additional Notes

- Ensure you have **Node.js** and **npm** installed.

---
