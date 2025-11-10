import mongoose from "mongoose";
import { ENV } from "./env.js";
import colors from "colors";
export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log(`connected to database successfully✅`.green);
  } catch (error) {
    console.log(`❌error connecting to database: `.red, error);
    process.exit(1);
  }
};
