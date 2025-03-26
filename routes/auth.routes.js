import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";

// Path : /api/v1/auth
const authRouter = Router();

// Sign up user
authRouter.post("/sign-up", signUp);

// Sign in user
authRouter.post("/sign-in", signIn);

// Sign out user
authRouter.post("/sign-out", signOut);

export default authRouter;
