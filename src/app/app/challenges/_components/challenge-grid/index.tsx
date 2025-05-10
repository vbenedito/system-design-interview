"use client";
import { useState } from "react";
import { ChallengeCard } from "../challenge-card";
import { DifficultyFilter } from "../difficulty-filter";
import { useRouter } from "next/navigation";
import { Challenge } from "@/types/Challenge";

interface ChallengeGridProps {
  challenges: Challenge[];
}

export const ChallengeGrid = ({ challenges }: ChallengeGridProps) => {
  const router = useRouter();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );

  const filteredChallenges = challenges.filter((challenge) => {
    const matchesDifficulty =
      !selectedDifficulty || challenge.difficulty === selectedDifficulty;
    return matchesDifficulty;
  });

  const handleStartChallenge = (challengeUrl: string) => {
    router.push(`/whiteboard/${challengeUrl}`);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <DifficultyFilter
          selectedDifficulty={selectedDifficulty}
          onSelectDifficulty={setSelectedDifficulty}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChallenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            title={challenge.title}
            description={challenge.description}
            difficulty={challenge.difficulty}
            onStart={() => handleStartChallenge(challenge.slug)}
          />
        ))}
      </div>
    </>
  );
};
