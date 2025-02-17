import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  category: text("category"),
});

export const insertQuestionSchema = createInsertSchema(questions).pick({
  question: true,
  answer: true,
  category: true,
});

export type Question = typeof questions.$inferSelect;
export type InsertQuestion = z.infer<typeof insertQuestionSchema>;

export const searchSchema = z.object({
  query: z.string().min(1),
});

export type SearchQuery = z.infer<typeof searchSchema>;