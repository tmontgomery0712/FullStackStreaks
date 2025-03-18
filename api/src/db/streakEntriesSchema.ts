import {
  integer,
  pgTable,
  text,
  boolean,
  date,
  timestamp,
  unique,
  uuid,
} from "drizzle-orm/pg-core";
import { streaksTable } from "./streaksSchema";

//When modifying any schema, you will then need to run npm run db:generate followed by npm run db:migrate for the changes to take affect
export const streakEntriesTable = pgTable(
  "streak_entries",
  {
    id: uuid().defaultRandom().primaryKey(),
    streakId: uuid("streak_id")
      .notNull()
      .references(() => streaksTable.id, { onDelete: "cascade" }),
    date: date("date").notNull(),
    completed: boolean("completed").notNull().default(true),
    notes: text("notes"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
  },
  (t) => [
    unique("streak_entries_unique_streak_date").on(t.streakId, t.date), // Composite unique constraint
  ]
);
