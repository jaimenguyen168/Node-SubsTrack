import { Router } from "express";

const subRouter = Router();

// Get all subscriptions
subRouter.get("/", (req, res) => {
  res.send({ title: "Get all subscriptions" });
});

// Get subscription by id
subRouter.get("/:id", (req, res) => {
  res.send({ title: "Get subscription by id" });
});

// Create subscription
subRouter.post("/", (req, res) => {
  res.send({ title: "Create subscription" });
});

// Update subscription by id
subRouter.put("/:id", (req, res) => {
  res.send({ title: "Update subscription by id" });
});

// Delete subscription by id
subRouter.delete("/:id", (req, res) => {
  res.send({ title: "Delete subscription by id" });
});

// Get all subscriptions for a user
subRouter.get("/user/:userId", (req, res) => {
  res.send({ title: "Get all subscriptions for a user" });
});

// Cancel a subscription
subRouter.put("/:userId/cancel", (req, res) => {
  res.send({ title: "Cancel a subscription" });
});

// Get all upcoming renewal subscriptions
subRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "Get all upcoming renewal subscriptions" });
});

export default subRouter;
