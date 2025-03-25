import mongoose from "mongoose";
import { MONGO_URI, NODE_ENV } from "../configs/env.js";

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined inside .env.<development/production>.local file");
}

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Connected to MongoDB in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectToMongoDB;