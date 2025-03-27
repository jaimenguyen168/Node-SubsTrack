import { Router } from "express";
import {deleteUserById, getAllUsers, getUserById, updateUserById} from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

// Get all users
userRouter.get("/", getAllUsers);

// Get user by id
userRouter.get("/:id", authorize, getUserById);

// Update user by id
userRouter.put("/:id", authorize, updateUserById);

// Delete user by id
userRouter.delete("/:id", authorize, deleteUserById);

export default userRouter;
