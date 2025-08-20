import express from "express";
const authRouter = express.Router();
import { login, logout, signup } from "../controllers/user.controller.js";
authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
export default authRouter;