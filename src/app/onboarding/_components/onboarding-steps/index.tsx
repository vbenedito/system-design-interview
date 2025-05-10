"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Progress } from "@/components/ui/progress";
import ProfessionalStep from "@/app/_components/onboarding-steps/professional-step";
import StudyHistoryStep from "@/app/_components/onboarding-steps/study-history-step";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { saveOnboardingUserInfos } from "../../actions";
import { OnboardingInfos } from "@/types/Onboarding";

export const OnboardingSteps = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [currentStep, setCurrentStep] = useState(1);
  const [onboardingInfos, setOnboardingInfos] = useState<OnboardingInfos>({
    workInIndustry: "no",
    yearsExperience: "0-2",
    seniorityLevel: "MIDLEVEL",
    howMuchTimeStudySystemDesign: 0,
    unity: "days",
  });
  const totalSteps = 2;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      router.push("/challenges");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-b from-brand-50/30 via-white to-white dark:from-brand-950/30 dark:via-background dark:to-background">
      <div className="w-full max-w-2xl space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Lets get to know you better
          </h1>
          <p className="text-muted-foreground">
            Help us tailor your interview experience
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>
              Step {currentStep} of {totalSteps}
            </span>
            <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <Progress value={(currentStep / totalSteps) * 100} />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && "Professional Background"}
              {currentStep === 2 && "Study History"}
              {currentStep === 3 && "Additional Information"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {currentStep === 1 && (
              <ProfessionalStep
                workInIndustry={onboardingInfos.workInIndustry}
                yearsExperience={onboardingInfos.yearsExperience}
                setOnboardingInfos={setOnboardingInfos}
              />
            )}
            {currentStep === 2 && (
              <StudyHistoryStep
                howMuchTimeStudySystemDesign={
                  onboardingInfos.howMuchTimeStudySystemDesign
                }
                setOnboardingInfos={setOnboardingInfos}
                unity={onboardingInfos.unity}
              />
            )}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="mr-2" />
                Back
              </Button>
              <Button
                onClick={
                  currentStep === totalSteps
                    ? () =>
                        startTransition(() => {
                          saveOnboardingUserInfos(onboardingInfos).then(() => {
                            router.push("/app/challenges");
                          });
                        })
                    : handleNext
                }
                disabled={isPending}
              >
                {currentStep === totalSteps ? "Complete" : "Next"}
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
