import { Router } from "express";

const authRouter = Router();

// Sign up user
authRouter.post("/sign-up", (req, res) => {
  res.send({ title: "sign-up" });
});

// Sign in user
authRouter.post("/sign-in", (req, res) => {
  res.send({ title: "sign-in" });
});

// Sign out user
authRouter.post("/sign-out", (req, res) => {
  res.send({ title: "sign-out" });
});

export default authRouter;
