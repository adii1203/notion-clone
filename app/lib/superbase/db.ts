import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as dotenv from "dotenv";
import * as schema from "@/migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";

dotenv.config({
  path: ".env",
});

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });

export const db = drizzle(client, {
  schema: schema,
});

const migrateDb = async () => {
  try {
    await migrate(db, { migrationsFolder: "migrations" });
  } catch (error) {
    console.log("Error migrating database", error);
  }
};

migrateDb();
