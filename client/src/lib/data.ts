import type { Question } from "@shared/schema";
import { BASE_PATH } from "./paths";

export async function getAllQuestions(): Promise<Question[]> {
  if (process.env.NODE_ENV === "development") {
    const response = await fetch("/api/questions");
    return response.json();
  } else {
    const response = await fetch(`${BASE_PATH}/data/questions.json`);
    const data = await response.json();
    return data.questions;
  }
}

export async function searchQuestions(query: string): Promise<Question[]> {
  if (process.env.NODE_ENV === "development") {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    return response.json();
  } else {
    const allQuestions = await getAllQuestions();
    const lowercaseQuery = query.toLowerCase();
    const words = lowercaseQuery.split(' ').filter(word => word.length > 3);

    return allQuestions.filter(q => {
      const qLower = q.question.toLowerCase();
      let score = 0;

      if (qLower === lowercaseQuery) {
        score = 100;
      } else if (qLower.includes(lowercaseQuery)) {
        score = 75;
      } else {
        const matchedWords = words.filter(word => qLower.includes(word));
        score = (matchedWords.length / words.length) * 50;
      }

      const answerMatch = q.answers.some(answer => 
        answer.toLowerCase().includes(lowercaseQuery)
      );
      if (answerMatch) {
        score += 10;
      }

      return score > 20;
    });
  }
}