import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const comments = pgTable('comments', {
  comment: text('comment').notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  postId: text('post_id').notNull(),
  username: text('username').notNull(),
})

export type Comment = typeof comments.$inferSelect
