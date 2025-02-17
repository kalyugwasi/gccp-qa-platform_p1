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
    enabled: !!search, // Only fetch when there's a search query
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
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-medium mb-2">Search GCCP Questions</h2>
            <p className="text-muted-foreground mb-6">
              Type your question to find relevant answers from the GCCP documentation
            </p>
            <SearchBar value={search} onChange={setSearch} />
          </div>

          {search && (
            <div className="mt-8">
              {isLoading ? (
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-full h-32 bg-muted animate-pulse rounded-lg"
                    />
                  ))}
                </div>
              ) : questions && questions.length > 0 ? (
                <div className="space-y-4">
                  {questions.map((question) => (
                    <QuestionCard key={question.id} question={question} />
                  ))}
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  No matching questions found. Try a different search term.
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}