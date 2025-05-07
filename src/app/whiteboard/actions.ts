import { prisma } from "@/service/database";

export async function getChallengeBySlug(slug: string) {
  const challenge = await prisma.challenge.findMany({
    where: {
      slug: slug,
    },
  });

  return challenge;
}
