import Subscription from "../models/subscription.model.js";

export const getAllSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find();
    res.status(200).json({
      success: true,
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
}

export const getSubscriptionById = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
}

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id
    })

    res.status(201).json({
      success: true,
      data: subscription
    })
  } catch (error) {
    next(error);
  }
};

export const updateSubscriptionById = async (req, res, next) => {
  try {
    const subscription = await Subscription.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
}

export const deleteSubscriptionById = async (req, res, next) => {
  try {
    const subscription = await Subscription.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
}

export const getUserSubscriptions = async (req, res, next) => {
  try {
    // Check if user is the owner of the subscription
    if (req.user.id !== req.params.id) {
      const error = new Error("You are not the owner of this subscription");
      error.status = 401;
      throw error;
    }

    const subscriptions = await Subscription.find({ user: req.params.id });

    res.status(200).json({
      success: true,
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};
