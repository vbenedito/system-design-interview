"use client";

import { OnboardingInfos } from "@/types/Onboarding";
import { useState } from "react";

export function useUserOnboarding(user: OnboardingInfos) {
  const [userInfos, setUserInfos] = useState(user);

  return {
    userInfos,
    setUserInfos,
  };
}
