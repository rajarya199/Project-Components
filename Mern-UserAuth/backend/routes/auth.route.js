import express from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";
const router = express.Router();
import { authorizeUser } from "../middleware/auth.middleware.js";
import { ProfileController } from "../controllers/user.controller.js";
router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/profile',authorizeUser,ProfileController)

export default router;