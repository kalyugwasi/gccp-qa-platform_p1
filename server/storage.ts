import { questions, type Question, type InsertQuestion } from "@shared/schema";
import fs from "fs";
import path from "path";

export interface IStorage {
  getAllQuestions(): Promise<Question[]>;
  searchQuestions(query: string): Promise<Question[]>;
  createQuestion(question: InsertQuestion): Promise<Question>;
}

function parseQuizData(): InsertQuestion[] {
  const filePath = path.join(process.cwd(), "attached_assets", "Arcade_lesson_quiz_answer_quicklab.txt");
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const questions: InsertQuestion[] = [];
  let currentQuestion: string | null = null;
  let currentAnswers: string[] = [];
  let currentCategory: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.endsWith('?')) {
      // If we have a complete previous question, add it
      if (currentQuestion && currentAnswers.length > 0) {
        questions.push({
          question: currentQuestion,
          answers: currentAnswers,
          category: currentCategory || 'GCCP',
        });
      }

      // Start new question
      currentQuestion = line;
      currentAnswers = [];
      currentCategory = null;
    } else if (line.startsWith('- ') && currentQuestion) {
      // This is an answer
      currentAnswers.push(line.substring(2));
    }
  }

  // Add the last question if exists
  if (currentQuestion && currentAnswers.length > 0) {
    questions.push({
      question: currentQuestion,
      answers: currentAnswers,
      category: currentCategory || 'GCCP',
    });
  }

  return questions;
}

export class MemStorage implements IStorage {
  private questions: Map<number, Question>;
  private currentId: number;

  constructor() {
    this.questions = new Map();
    this.currentId = 1;
    this.initializeData();
  }

  private initializeData() {
    const quizQuestions = parseQuizData();
    quizQuestions.forEach(q => {
      const question: Question = { id: this.currentId++, ...q };
      this.questions.set(question.id, question);
    });
  }

  async getAllQuestions(): Promise<Question[]> {
    return Array.from(this.questions.values());
  }

  async searchQuestions(query: string): Promise<Question[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.questions.values()).filter(q => 
      q.question.toLowerCase().includes(lowercaseQuery) ||
      q.answers.some(answer => answer.toLowerCase().includes(lowercaseQuery))
    );
  }

  async createQuestion(question: InsertQuestion): Promise<Question> {
    const id = this.currentId++;
    const newQuestion: Question = { id, ...question };
    this.questions.set(id, newQuestion);
    return newQuestion;
  }
}

export const storage = new MemStorage();