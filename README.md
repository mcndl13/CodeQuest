# CodeQuest – SOEN 357 – Winter 2025 – Final Project

### Team Members

| Name                      | Student ID |
|---------------------------|:----------:|
| Mohamed Gueye             | 40247476   |
| Mouhamed Kairson Coundoul | 40248237   |
| Youssef Francis           | 40246559   |
| Adja Bineta Boye          | 40281923   |

---

## Project Overview

**CodeQuest** is a web-based application created as part of the SOEN 357: User Interface Design course at Concordia University, Winter 2025. It aims to enhance the learning experience for software engineering students by providing interactive challenges, collaborative tools, and an intuitive interface.

This project emphasizes usability and user-centered design and was developed using Agile methodologies.

---

## Key Features

- Secure user authentication with role-based access control  
- Real-time collaborative coding challenges with instant feedback  
- Project and assignment management tools  
- Fully responsive design for desktop and mobile  
- Built using:
  - **Frontend:** React with Vite  
  - **Backend:** Node.js with Express  
  - **Database:** MongoDB

---

## Getting Started

Follow the steps below to run the application locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/codequest.git
cd codequest
```

### 2. Install Dependencies

Install required packages for both frontend and backend:

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Configure Environment Variables

In the `backend` directory, create a `.env` file with the following content:

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

Start the frontend development server:

```bash
cd ../frontend
npm run dev
```

Access the application by visiting:

```
http://localhost:5173
```

---

## Additional Notes

- Ensure Node.js and npm are installed on your system.
- The backend uses **Nodemon** for automatic server restarts during development.

Enjoy using **CodeQuest**!
