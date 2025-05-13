import { prisma } from "@/service/database";

export async function getChallenges() {
  const challenges = await prisma.challenge.findMany();

  return challenges;
}
