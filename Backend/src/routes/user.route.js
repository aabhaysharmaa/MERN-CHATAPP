import express from "express";
const userRouter = express.Router();
import { user } from "../controllers/user.controller.js";
userRouter.get("/", user);



export default userRouter;