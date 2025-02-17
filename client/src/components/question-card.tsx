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
          <p className="text-muted-foreground">{question.answer}</p>
          {question.category && (
            <p className="text-sm text-muted-foreground">Category: {question.category}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}