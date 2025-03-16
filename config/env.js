import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const {
  PORT,
  NODE_ENV,
  DB_URI,
  DB_NAME,
  JWT_SECRET,
  JWT_EXPIRY,
  CONNECT_URL,
} = process.env;
