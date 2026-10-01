import mongoose from "mongoose";
import { env } from "../env";

export async function dbConnect() {
  try {
    await mongoose.connect(env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection error:", err);
  }
}
