"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProfessionalStepWrapper from "./professional-step-wrapper";
import StudyHistoryStepWrapper from "./study-history-step-wrapper";
import { UserProps } from "@/types/User";
import { useUserOnboarding } from "@/hooks/useUserOnboarding";
import { Button } from "@/components/ui/button";
import { saveOnboardingUserInfos } from "@/app/onboarding/actions";
import { toast } from "sonner";

export function UserInfosSteps(user: UserProps) {
  const { userInfos, setUserInfos } = useUserOnboarding(user);

  const handleSaveUserInfos = () => {
    try {
      saveOnboardingUserInfos(userInfos);
      toast("Informações atualizadas com sucesso", {
        description: "Suas informações foram alteradas com sucesso",
        duration: 3000,
        style: { backgroundColor: "black", color: "white" },
      });
    } catch (error) {
      console.error(error);
      toast("Erro, tente novamente", {
        description: "Problemas ao alterar suas informações. Tente novamente!",
        duration: 3000,
        style: { backgroundColor: "red", color: "white" },
      });
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Professional Background</CardTitle>
        </CardHeader>
        <CardContent>
          <ProfessionalStepWrapper
            seniorityLevel={userInfos.seniorityLevel}
            workInIndustry={userInfos.workInIndustry}
            yearsExperience={userInfos.yearsExperience}
            setInfos={setUserInfos}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Study History</CardTitle>
        </CardHeader>
        <CardContent>
          <StudyHistoryStepWrapper
            howMuchTimeStudySystemDesign={
              userInfos.howMuchTimeStudySystemDesign
            }
            unity={userInfos.unity}
            setInfos={setUserInfos}
          />
        </CardContent>
      </Card>

      <Button
        className="w-full"
        disabled={userInfos === user}
        onClick={handleSaveUserInfos}
      >
        Save
      </Button>
    </>
  );
}
