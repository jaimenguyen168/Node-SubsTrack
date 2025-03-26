import express from "express";
import cookieParser from "cookie-parser";

import { PORT } from "./configs/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToMongoDB from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

// To enable JSON parsing
app.use(express.json());

// To enable URL-encoded parsing
app.use(express.urlencoded({ extended: false }));

// To enable cookie parsing
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.use(errorMiddleware)

app.get("/", (req, res) => {
  res.send("Welcome to the Subscription Tracker app!");
});

app.listen(PORT, async () => {
  console.log(
    `Subscription Tracker API is running on http://localhost:${PORT}`,
  );

  await connectToMongoDB()
});

export default app;
