import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: ["./src/db/streaksSchema.ts", "./src/db/streakEntriesSchema.ts"],
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
