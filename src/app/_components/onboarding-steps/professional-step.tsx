"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OnboardingInfos } from "@/types/Onboarding";
import { ProfessionalStepProps } from "@/types/User";
import { Dispatch, SetStateAction } from "react";

type Props = {
  value: Omit<ProfessionalStepProps, "setInfos">;
  setValue: Dispatch<SetStateAction<OnboardingInfos>>;
};

export default function ProfessionalStep({ value, setValue }: Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label>Do you work in the tech industry?</Label>
        <RadioGroup
          defaultValue={value.workInIndustry}
          onValueChange={(val) =>
            setValue((old) => ({ ...old, workInIndustry: val }))
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
          defaultValue={value.yearsExperience}
          onValueChange={(val) =>
            setValue((old) => ({ ...old, yearsExperience: val }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select years of experience" />
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
          defaultValue={value.seniorityLevel}
          onValueChange={(val) =>
            setValue((old) => ({
              ...old,
              seniorityLevel: val as OnboardingInfos["seniorityLevel"],
            }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your seniority level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="JUNIOR">Junior</SelectItem>
            <SelectItem value="MIDLEVEL">Mid-level</SelectItem>
            <SelectItem value="SENIOR">Senior</SelectItem>
            <SelectItem value="STAFF">Staff/Principal</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
