import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchBar } from "@/components/search-bar";
import { QuestionCard } from "@/components/question-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { type Question } from "@shared/schema";

export default function Home() {
  const [search, setSearch] = useState("");

  const { data: questions, isLoading } = useQuery<Question[]>({
    queryKey: [search ? `/api/search?q=${search}` : "/api/questions"],
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold">GCCP Q&A</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-full h-48 bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {questions?.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
