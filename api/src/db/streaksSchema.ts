import {
  integer,
  pgTable,
  varchar,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const streaksTable = pgTable("streaks", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  targetDays: integer(),
  color: text(),
  icon: text(),
  createdAt: timestamp({ withTimezone: true }).defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).defaultNow(),
});
