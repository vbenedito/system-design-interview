"use client";

import ProfessionalStep from "./professional-step";
import { OnboardingInfos } from "@/types/Onboarding";
import { ProfessionalStepProps } from "@/types/User";
import { SetStateAction } from "react";

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

  function updateInfos(newData: SetStateAction<OnboardingInfos>) {
    setInfos((prev) => ({ ...prev, ...newData }));
  }

  return <ProfessionalStep value={infos} setValue={updateInfos} />;
}
