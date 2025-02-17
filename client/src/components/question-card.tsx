import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Question } from "@shared/schema";

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium">{question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <ul className="list-disc pl-4 space-y-1">
            {question.answers.map((answer, index) => (
              <li key={index} className="text-muted-foreground">
                {answer}
              </li>
            ))}
          </ul>
          {question.category && (
            <p className="text-sm text-muted-foreground mt-4">Category: {question.category}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}