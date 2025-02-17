import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  answer: text("answer").notNull(),
  tags: text("tags").array().notNull(),
});

export const insertQuestionSchema = createInsertSchema(questions).pick({
  title: true,
  content: true,
  answer: true,
  tags: true,
});

export type Question = typeof questions.$inferSelect;
export type InsertQuestion = z.infer<typeof insertQuestionSchema>;

export const searchSchema = z.object({
  query: z.string().min(1),
});

export type SearchQuery = z.infer<typeof searchSchema>;
