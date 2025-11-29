#  🔐 MERN User Authentication System (JWT + LocalStorage)
<div align="center">

  <img src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logo=node.js&logoColor=white&color=339933" alt="nodejs" />
  <img src="https://img.shields.io/badge/-Express.js-black?style=for-the-badge&logo=express&logoColor=white&color=000000" alt="expressjs" />
  <img src="https://img.shields.io/badge/-JWT_Auth-black?style=for-the-badge&logo=key&logoColor=white" alt="JWTauthtoken">
  <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logo=mongodb&logoColor=white&color=47A248" alt="mongodb" />
 <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react&logoColor=white&color=61DAFB" alt="react" />
  <img src="https://img.shields.io/badge/-React_Router-black?style=for-the-badge&logo=reactrouter&logoColor=white&color=CA4245" alt="react router" />
    <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logo=vite&logoColor=white&color=646CFF" alt="vite" />
  <img src="https://img.shields.io/badge/-Axios-black?style=for-the-badge&logo=axios&logoColor=white&color=5A29E4" alt="axios" />

  </div>

  ## 🌟 Overview
JWT token based user authentication system in MERN stack App.

Token-A string signed by the server containing user data. \
Stored at-Client Side(any of LocalStorage,Cookies,sessionStorage)

---

## 🧠 Why JWT Authentication?

- ✔ Stateless (server does not store sessions)
- ✔ Perfect for SPAs like React
- ✔ Fast & scalable across multiple servers
- ✔ Standard for modern web/mobile APIs

---
## 🔁 Complete Authentication Workflow

### 1️⃣ **User Registration Flow**

1. User submits registration form (name, email, password).
2. Backend validates the data.
3. Password is hashed using **bcrypt**.
4. User is saved to MongoDB.
5. Backend generates a **JWT token**.
6. Token is returned to the frontend.
7. Frontend stores token in **localStorage**.

---
### 2️⃣ **User Login Flow**

1. User enters email + password.
2. Backend checks if user exists.
3. Password compared using bcrypt.
4. If valid:
   - Generate JWT token
   - Return token + user data
5. Frontend:
   - Saves token to **localStorage**
   - Saves user globally via Context API

---

### 3️⃣ **Authenticated API Request**
- fontend API setup( add token in header authentication for each request)
Backend middleware:

- Checks if token exists  
- Verifies token  
- Decodes user information  

If valid → request proceeds.

---

### 4️⃣ **Protected Routes (Frontend)**

Only logged-in users can access certain pages.

Example logic:

- If `token` exists → allow access  
- Else → redirect to login  

---
### 5️⃣ **Logout Flow**

On logout:

- Remove token from localStorage
- Clear user context
- Redirect to login page

---
