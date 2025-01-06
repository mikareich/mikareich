import { timestamp } from "drizzle-orm/pg-core";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const comments = pgTable("comments", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  username: text("username").notNull(),
  comment: text("comment").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  postId: text("post_id").notNull(),
});

export type Comment = typeof comments.$inferSelect;
