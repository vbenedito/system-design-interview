import { prisma } from "@/service/database";

export async function getChallengeBySlug(slug: string) {
  if (!slug) {
    return {
      error: "slug is required",
      data: null,
    };
  }

  const challenge = await prisma.challenge.findMany({
    where: {
      slug: slug,
    },
  });

  return challenge;
}
