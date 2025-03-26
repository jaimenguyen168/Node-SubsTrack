import { Router } from "express";
import { getAllUsers, getUserById } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

// Get all users
userRouter.get("/", getAllUsers);

// Get user by id
userRouter.get("/:id", authorize, getUserById);

// Create user
userRouter.post("/", (req, res) => {
  res.send({ title: "Create user" });
});

// Update user by id
userRouter.put("/:id", (req, res) => {
  res.send({ title: "Update user by id" });
});

// Delete user by id
userRouter.delete("/:id", (req, res) => {
  res.send({ title: "Delete user by id" });
});

export default userRouter;
