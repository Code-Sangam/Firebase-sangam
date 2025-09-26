import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "libsql" as "libsql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
} satisfies Config;
