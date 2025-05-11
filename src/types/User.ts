import { User } from "@prisma/client";
import { OnboardingInfos } from "./Onboarding";
import { Dispatch, SetStateAction } from "react";

export type UserProps = User;

export type ProfessionalStepProps = Pick<
  UserProps,
  "workInIndustry" | "yearsExperience" | "seniorityLevel"
> & { setInfos: Dispatch<SetStateAction<OnboardingInfos>> };

export type StudyHistoryStepProps = Pick<
  UserProps,
  "howMuchTimeStudySystemDesign" | "unity"
> & { setInfos: Dispatch<SetStateAction<OnboardingInfos>> };
