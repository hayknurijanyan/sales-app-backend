import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";
import errorHandler from "../utils/errorHandler.js";

const router = express.Router();

router.post("/register", errorHandler(createUser));
router.post("/login", errorHandler(loginUser));

export default router;
