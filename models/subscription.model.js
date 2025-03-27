import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Subscription name is required"],
      trim: true,
      minLength: [3, "Subscription name must be at least 3 characters long"],
      maxLength: [100, "Subscription name must be at most 100 characters long"],
    },
    price: {
      type: Number,
      required: [true, "Subscription price is required"],
      min: [0, "Subscription price must be at least 0"],
    },
    currency: {
      type: String,
      enum: ["USD", "EUR", "GBP"],
      required: [true, "Subscription currency is required"],
    },
    frequency: {
      type: String,
      enum: ["Daily", "Weekly", "Monthly", "Yearly"],
    },
    category: {
      type: String,
      enum: [
        "Entertainment",
        "Education",
        "Food",
        "Shopping",
        "Health",
        "Travel",
        "News",
        "Other",
      ],
      required: [true, "Subscription category is required"],
    },
    paymentMethod: {
      type: String,
      enum: ["Credit Card", "Debit Card", "PayPal", "Bank Transfer"],
      required: [true, "Subscription payment method is required"],
    },
    status: {
      type: String,
      enum: ["Active", "Cancelled", "Expired"],
      default: "Active",
    },
    startDate: {
      type: Date,
      required: [true, "Subscription start date is required"],
      validate: {
        validator: (value) => value <= new Date(),
        message: "Subscription start date must be in the past",
      },
    },
    renewalDate: {
      type: Date,
      validate: {
        validator: (value) => value > this.startDate,
        message: "Subscription renewal date must be in the future",
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Subscription user is required"],
      index: true,
    },
  },
  { timestamps: true },
);

subscriptionSchema.pre("save", function (next) {
  if (!this.renewalDate) {
    const renewalPeriods = {
      Daily: 1,
      Weekly: 7,
      Monthly: 30,
      Yearly: 365,
    };

    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(
      this.startDate.getDate() + renewalPeriods[this.frequency],
    );
  }

  if (this.renewalDate < new Date()) {
    this.status = "Expired";
  }

  next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
