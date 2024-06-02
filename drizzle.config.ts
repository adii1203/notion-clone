import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export default defineConfig({
  schema: "./app/lib/superbase/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
