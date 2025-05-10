"use server";

import { prisma } from "@/service/database";
import { auth } from "@/service/auth";
import { User } from "@prisma/client";
import { OnboardingInfos } from "@/types/Onboarding";

export async function saveOnboardingUserInfos(
  onboardingUserInfos: OnboardingInfos
) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Not authorized",
      data: null,
    };
  }

  const userValues = Object.values(onboardingUserInfos);

  if (!userValues.length) {
    return {
      error: "UserInfos are required",
      data: null,
    };
  }

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      workInIndustry: onboardingUserInfos.workInIndustry,
      yearsExperience: onboardingUserInfos.yearsExperience,
      seniorityLevel: onboardingUserInfos.seniorityLevel,
      howMuchTimeStudySystemDesign:
        onboardingUserInfos.howMuchTimeStudySystemDesign,
      unity: onboardingUserInfos.unity,
      alreadyVisitedOnboardingPage: true,
    },
  });
}

export async function getUserById(
  id: string
): Promise<User | { error: string; data: null }> {
  if (!id) {
    return {
      error: "Not authorized",
      data: null,
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user?.id) {
    return {
      error: "User not exist",
      data: null,
    };
  }

  return user;
}
