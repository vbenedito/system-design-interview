"use client";

import ProfessionalStep from "./professional-step";
import { OnboardingInfos } from "@/types/Onboarding";
import { ProfessionalStepProps } from "@/types/User";

export default function ProfessionalStepWrapper({
  workInIndustry,
  yearsExperience,
  seniorityLevel,
  setInfos,
}: ProfessionalStepProps) {
  const infos = {
    workInIndustry,
    yearsExperience,
    seniorityLevel,
  };

  function updateInfos(newData: Partial<OnboardingInfos>) {
    setInfos((prev) => ({ ...prev, ...newData }));
  }

  return <ProfessionalStep value={infos} setValue={updateInfos} />;
}
