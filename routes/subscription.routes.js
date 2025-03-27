import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription, deleteSubscriptionById,
  getAllSubscriptions,
  getSubscriptionById,
  getUserSubscriptions, updateSubscriptionById
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

// Get all subscriptions
subscriptionRouter.get("/", getAllSubscriptions);

// Get subscription by id
subscriptionRouter.get("/:id", getSubscriptionById);

// Create subscription
subscriptionRouter.post("/", authorize, createSubscription);

// Update subscription by id
subscriptionRouter.put("/:id", updateSubscriptionById);

// Delete subscription by id
subscriptionRouter.delete("/:id", deleteSubscriptionById);

// Get all subscriptions for a user
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

// Cancel a subscription
subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "Cancel a subscription" });
});

// Get all upcoming renewal subscriptions
subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "Get all upcoming renewal subscriptions" });
});

export default subscriptionRouter;
