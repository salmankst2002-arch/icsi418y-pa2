
# **ICSI 418Y – Programming Assignment 2**  
## **Full‑Stack Login & Signup Application**  
React • Node.js • Express • MongoDB

---

## 📌 **Overview**

This project is a full‑stack web application built for **ICSI 418Y – Software Engineering (Programming Assignment 2)**.  
It implements **Signup** and **Login** functionality using:

- **React** (Frontend)
- **Node.js + Express** (Backend API)
- **MongoDB Atlas** (Database)

The application demonstrates complete frontend–backend communication, user validation, database storage, and error handling.

---

## 🚀 **Features**

### **Signup**
Users can create an account by entering:
- First Name  
- Last Name  
- Username  
- Password  

Backend checks:
- All fields are provided  
- Username is unique  
- If valid → user is stored in MongoDB  
- If invalid → error message returned  

A user document contains:
```json
{
  "_id": "...",
  "f_name": "First",
  "l_name": "Last",
  "username": "uniqueUser",
  "password": "password123"
}
```

---

### **Login**
Users enter:
- Username  
- Password  

Backend checks:
- Username exists  
- Password matches  
- If valid → success message  
- If invalid → failure message  

---

## ⚙️ **Tech Stack**

### **Frontend**
- React  
- useState for form handling  
- Fetch API for HTTP requests  
- Clean UI with modern styling  

### **Backend**
- Node.js  
- Express  
- CORS + JSON middleware  
- REST API routes: `/signup` and `/login`

### **Database**
- MongoDB Atlas  
- `pa2` database  
- `users` collection  

---

## 🔗 **Frontend → Backend Communication**

The React app sends POST requests:

### Signup:
```js
fetch("http://localhost:9000/signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ f_name, l_name, username, password })
});
```

### Login:
```js
fetch("http://localhost:9000/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username, password })
});
```

---

## 🗄️ **Backend → MongoDB Logic**

### Signup:
- Validate fields  
- Check duplicate username  
- Insert new user into `users` collection  

### Login:
- Find user by username  
- Compare password  
- Return success or failure  

---

## 🛠️ **How to Run the Project**

### **Backend**
```
cd server
npm install
node server.js
```

### **Frontend**
```
cd client
npm install
npm run dev
```

Open the displayed local URL (usually `http://localhost:5173/`).

---

## 🎥 **Video Demonstration Requirements**

Your Zoom video must show:

1. Starting backend + frontend  
2. Creating a new user  
3. Showing user in MongoDB Atlas  
4. Attempting duplicate username  
5. Successful login  
6. Failed login  
7. Brief code explanation  
8. GitHub repo overview  

---

## 📁 **Important Notes**

- **Do NOT upload `.env`**  
- **Do NOT upload `node_modules`**  
- Commit and push your final code  
- Verify your GitHub repo before submitting  

---

## ✔️ **Status**

All assignment requirements have been fully implemented and tested.

 
