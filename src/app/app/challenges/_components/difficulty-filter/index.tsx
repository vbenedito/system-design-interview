import { Button } from "@/components/ui/button";

interface DifficultyFilterProps {
  selectedDifficulty: string | null;
  onSelectDifficulty: (difficulty: string | null) => void;
}

export const DifficultyFilter = ({
  selectedDifficulty,
  onSelectDifficulty,
}: DifficultyFilterProps) => {
  const difficulties = ["EASY", "MEDIUM", "HARD"];

  return (
    <div className="flex gap-2">
      {difficulties.map((difficulty) => (
        <Button
          key={difficulty}
          variant={selectedDifficulty === difficulty ? "default" : "outline"}
          onClick={() =>
            onSelectDifficulty(
              selectedDifficulty === difficulty ? null : difficulty
            )
          }
          className="text-sm"
        >
          {difficulty}
        </Button>
      ))}
    </div>
  );
};
