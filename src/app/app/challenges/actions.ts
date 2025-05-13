import { prisma } from "@/service/database";
import { Challenge } from "@/types/Challenge";

export async function getChallenges() {
  const challenges = await prisma.challenge.findMany();

  return challenges;
}

export async function createChallenge(challengeInfos: Challenge) {
  await prisma.challenge.create({
    data: {
      title: challengeInfos.title,
      description: challengeInfos.description,
      slug: challengeInfos.slug,
      difficulty: challengeInfos.difficulty,
    },
  });
}
