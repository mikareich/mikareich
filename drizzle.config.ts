import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lib/schema.ts",
  out: "./src/lib/db",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
