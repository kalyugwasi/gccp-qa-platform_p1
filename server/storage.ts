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
  let currentCategory: string | null = 'GCCP'; // Default category

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === '') continue;

    // Check if this line is part of a question
    const isQuestionStart = line.includes('?') || 
                           (line.toLowerCase().includes('select') && 
                            line.toLowerCase().includes('answer'));

    if (isQuestionStart) {
      // If we have a complete previous question, add it
      if (currentQuestion && currentAnswers.length > 0) {
        questions.push({
          question: currentQuestion,
          answers: currentAnswers,
          category: currentCategory,
        });
      }

      // Start new question
      currentQuestion = line;
      currentAnswers = [];

      // Check if next line is part of the question (like "Select two answers")
      if (i + 1 < lines.length) {
        const nextLine = lines[i + 1].trim();
        if (nextLine.toLowerCase().includes('select') && 
            nextLine.toLowerCase().includes('answer')) {
          currentQuestion += ' ' + nextLine;
          i++; // Skip the next line since we've included it
        }
      }
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
      category: currentCategory,
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
      const question: Question = {
        id: this.currentId++,
        question: q.question,
        answers: q.answers,
        category: q.category || 'GCCP', // Ensure category is never undefined
      };
      this.questions.set(question.id, question);
    });
  }

  async getAllQuestions(): Promise<Question[]> {
    return Array.from(this.questions.values());
  }

  async searchQuestions(query: string): Promise<Question[]> {
    const lowercaseQuery = query.toLowerCase();
    const words = lowercaseQuery.split(' ').filter(word => word.length > 3);

    // Score each question based on match quality
    const scoredQuestions = Array.from(this.questions.values()).map(q => {
      const qLower = q.question.toLowerCase();
      let score = 0;

      // Exact match gets highest score
      if (qLower === lowercaseQuery) {
        score = 100;
      }
      // Contains entire query as substring
      else if (qLower.includes(lowercaseQuery)) {
        score = 75;
      }
      // Partial word matches
      else {
        const matchedWords = words.filter(word => qLower.includes(word));
        score = (matchedWords.length / words.length) * 50;
      }

      // Boost score if answers contain the query
      const answerMatch = q.answers.some(answer => 
        answer.toLowerCase().includes(lowercaseQuery)
      );
      if (answerMatch) {
        score += 10;
      }

      return { question: q, score };
    });

    // Filter questions with a minimum score and sort by score
    return scoredQuestions
      .filter(({ score }) => score > 20) // Minimum threshold
      .sort((a, b) => b.score - a.score)
      .map(({ question }) => question);
  }

  async createQuestion(question: InsertQuestion): Promise<Question> {
    const id = this.currentId++;
    const newQuestion: Question = {
      id,
      question: question.question,
      answers: question.answers,
      category: question.category || 'GCCP', // Ensure category is never undefined
    };
    this.questions.set(id, newQuestion);
    return newQuestion;
  }
}

export const storage = new MemStorage();