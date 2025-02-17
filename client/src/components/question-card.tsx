import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Question } from "@shared/schema";

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">{question.title}</CardTitle>
        <div className="flex gap-2 flex-wrap">
          {question.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">{question.content}</p>
          <div className="pt-4 border-t">
            <h4 className="font-semibold mb-2">Answer:</h4>
            <p className="text-foreground whitespace-pre-wrap">{question.answer}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
