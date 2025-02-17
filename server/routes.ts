import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { searchSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/questions", async (_req, res) => {
    const questions = await storage.getAllQuestions();
    res.json(questions);
  });

  app.get("/api/search", async (req, res) => {
    const query = req.query.q as string;
    const result = searchSchema.safeParse({ query });
    
    if (!result.success) {
      return res.status(400).json({ message: "Invalid search query" });
    }

    const questions = await storage.searchQuestions(query);
    res.json(questions);
  });

  const httpServer = createServer(app);
  return httpServer;
}
