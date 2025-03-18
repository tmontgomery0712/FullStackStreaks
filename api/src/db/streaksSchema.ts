import {
  integer,
  pgTable,
  varchar,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

//When modifying any schema, you will then need to run npm run db:generate followed by npm run db:migrate for the changes to take affect
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
