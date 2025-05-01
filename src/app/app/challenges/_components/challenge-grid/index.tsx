import { ChallengeCard } from "../challenge-card";

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

interface ChallengeGridProps {
  selectedDifficulty: string | null;
}

export const ChallengeGrid = ({ selectedDifficulty }: ChallengeGridProps) => {
  const challenges: Challenge[] = [
    {
      id: "url-shortener",
      title: "Design a URL Shortener",
      description:
        "Simple system to convert long URLs into short, shareable links.",
      difficulty: "Beginner",
    },
    {
      id: "chat-app",
      title: "Design a Scalable Chat App",
      description:
        "Real-time messaging system that supports 1:1 and group chats.",
      difficulty: "Intermediate",
    },
    {
      id: "ride-sharing",
      title: "Design a Ride Sharing System",
      description:
        "Platform like Uber, handling geolocation, matching, and requests.",
      difficulty: "Advanced",
    },
    {
      id: "file-storage",
      title: "Design a File Storage Service",
      description:
        "Cloud-based file storage (like Google Drive) with sharing and sync.",
      difficulty: "Intermediate",
    },
    {
      id: "news-feed",
      title: "Design a News Feed",
      description:
        "Personalized feed with relevance ranking and real-time updates.",
      difficulty: "Intermediate",
    },
  ];

  const filteredChallenges = challenges.filter((challenge) => {
    const matchesDifficulty =
      !selectedDifficulty || challenge.difficulty === selectedDifficulty;
    return matchesDifficulty;
  });

  const handleStartChallenge = (challengeId: string) => {
    // Will implement challenge starting logic later
    console.log(`Starting challenge: ${challengeId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredChallenges.map((challenge) => (
        <ChallengeCard
          key={challenge.id}
          title={challenge.title}
          description={challenge.description}
          difficulty={challenge.difficulty}
          onStart={() => handleStartChallenge(challenge.id)}
        />
      ))}
    </div>
  );
};
