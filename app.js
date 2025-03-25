import express from "express";

import { PORT } from "./configs/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Subscription Tracker app!");
});

app.listen(PORT, () => {
  console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
});

export default app;