"use client";

import { OnboardingInfos } from "@/types/Onboarding";
import { StudyHistoryStepProps } from "@/types/User";
import StudyHistoryStep from "./study-history-step";
import { SetStateAction } from "react";

export default function StudyHistoryStepWrapper({
  howMuchTimeStudySystemDesign,
  unity,
  setInfos,
}: StudyHistoryStepProps) {
  const infos = {
    howMuchTimeStudySystemDesign,
    unity,
  };

  function updateInfos(newData: SetStateAction<OnboardingInfos>) {
    setInfos((prev) => ({ ...prev, ...newData }));
  }

  return <StudyHistoryStep value={infos} setValue={updateInfos} />;
}
