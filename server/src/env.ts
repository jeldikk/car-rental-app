import "dotenv/config";
import { z } from "zod";

export const envSchema = z.object({
  MONGO_URI: z.string(),
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.string().transform(Number),
});

export const env = envSchema.parse(process.env);
