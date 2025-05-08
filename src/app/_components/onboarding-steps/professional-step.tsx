import { OnboardingInfos } from "@/app/onboarding/page";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";

type ProfessionalStepProps = {
  workInIndustry: OnboardingInfos["workInIndustry"];
  yearsExperience: OnboardingInfos["yearsExperience"];

  setOnboardingInfos: Dispatch<SetStateAction<OnboardingInfos>>;
};

const ProfessionalStep = ({
  workInIndustry,
  yearsExperience,
  setOnboardingInfos,
}: ProfessionalStepProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label>Do you work in the tech industry?</Label>
        <RadioGroup
          defaultValue={workInIndustry}
          onValueChange={(value) =>
            setOnboardingInfos((prev) => ({ ...prev, workInIndustry: value }))
          }
          className="flex flex-col space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <Label htmlFor="yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <Label htmlFor="no">No</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-3">
        <Label htmlFor="experience">Years of Experience / Study</Label>
        <Select
          onValueChange={(value) =>
            setOnboardingInfos((prev) => ({ ...prev, yearsExperience: value }))
          }
        >
          <SelectTrigger>
            <SelectValue
              placeholder="Select years of experience"
              defaultValue={yearsExperience}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-2">0-2 years</SelectItem>
            <SelectItem value="3-5">3-5 years</SelectItem>
            <SelectItem value="6-8">6-8 years</SelectItem>
            <SelectItem value="9+">9+ years</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label htmlFor="seniority">Seniority Level</Label>
        <Select
          onValueChange={(event) =>
            setOnboardingInfos((prev) => ({ ...prev, seniorityLevel: event }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your seniority level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="junior">Junior</SelectItem>
            <SelectItem value="mid">Mid-level</SelectItem>
            <SelectItem value="senior">Senior</SelectItem>
            <SelectItem value="staff">Staff/Principal</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProfessionalStep;
