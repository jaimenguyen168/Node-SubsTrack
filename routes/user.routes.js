import { Router } from "express";

const userRouter = Router();

// Get all users
userRouter.get("/", (req, res) => {
  res.send({ title: "Get all users" });
});

// Get user by id
userRouter.get("/:id", (req, res) => {
  res.send({ title: `Get user by ${req.params.id}` });
});

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
