import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ChallengeCardProps {
  title: string;
  description: string;
  difficulty: string;
  onStart: () => void;
}

export const ChallengeCard = ({
  title,
  description,
  difficulty,
  onStart,
}: ChallengeCardProps) => {
  const difficultyColor = {
    EASY: "bg-green-100 text-green-800",
    MEDIUM: "bg-blue-100 text-blue-800",
    HARD: "bg-purple-100 text-purple-800",
  }[difficulty];

  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColor}`}
          >
            {difficulty}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onStart}
          className="w-full bg-custom-primary hover:bg-custom-primary-foreground"
        >
          Start Challenge
        </Button>
      </CardFooter>
    </Card>
  );
};
