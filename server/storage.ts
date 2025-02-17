import { questions, type Question, type InsertQuestion } from "@shared/schema";

export interface IStorage {
  getAllQuestions(): Promise<Question[]>;
  searchQuestions(query: string): Promise<Question[]>;
  createQuestion(question: InsertQuestion): Promise<Question>;
}

const initialQuestions: InsertQuestion[] = [
  {
    title: "What is Google Cloud Platform?",
    content: "Can someone explain what GCP is and its main services?",
    answer: "Google Cloud Platform (GCP) is a suite of cloud computing services that runs on the same infrastructure that Google uses internally. Key services include Compute Engine (VMs), Cloud Storage, BigQuery (data analytics), and App Engine (PaaS).",
    tags: ["basics", "cloud"]
  },
  {
    title: "How to create a VM instance?",
    content: "What are the steps to create a virtual machine in GCP?",
    answer: "1. Go to Compute Engine > VM instances\n2. Click 'Create Instance'\n3. Choose machine type and configuration\n4. Select boot disk and OS\n5. Configure networking\n6. Click 'Create'",
    tags: ["compute-engine", "vm"]
  }
];

export class MemStorage implements IStorage {
  private questions: Map<number, Question>;
  private currentId: number;

  constructor() {
    this.questions = new Map();
    this.currentId = 1;
    this.initializeData();
  }

  private initializeData() {
    initialQuestions.forEach(q => {
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
      q.title.toLowerCase().includes(lowercaseQuery) ||
      q.content.toLowerCase().includes(lowercaseQuery) ||
      q.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
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
