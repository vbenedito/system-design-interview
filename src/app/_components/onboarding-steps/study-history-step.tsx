import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { OnboardingInfos } from "@/app/onboarding/page";
import { Dispatch, SetStateAction } from "react";

type StudyHistoryStepProps = {
  howMuchTimeStudySystemDesign: OnboardingInfos["howMuchTimeStudySystemDesign"];
  unity: OnboardingInfos["unity"];
  setOnboardingInfos: Dispatch<SetStateAction<OnboardingInfos>>;
};

const StudyHistoryStep = ({
  howMuchTimeStudySystemDesign,
  unity,
  setOnboardingInfos,
}: StudyHistoryStepProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label>How long have you been studying system design?</Label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              type="number"
              placeholder="Duration"
              min="0"
              defaultValue={howMuchTimeStudySystemDesign}
              onChange={(event) =>
                setOnboardingInfos((prev) => ({
                  ...prev,
                  howMuchTimeStudySystemDesign: Number(event.target.value),
                }))
              }
              className="w-full"
            />
          </div>
          <div>
            <Select
              onValueChange={(value) => {
                setOnboardingInfos((prev) => ({
                  ...prev,
                  unity: value,
                }));
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select unit" defaultValue={unity} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="days">Days</SelectItem>
                <SelectItem value="months">Months</SelectItem>
                <SelectItem value="years">Years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyHistoryStep;
