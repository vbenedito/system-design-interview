import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { OnboardingInfos } from "@/types/Onboarding";
import { StudyHistoryStepProps } from "@/types/User";
import { Dispatch, SetStateAction } from "react";

type Props = {
  value: Omit<StudyHistoryStepProps, "setInfos">;
  setValue: Dispatch<SetStateAction<OnboardingInfos>>;
};

const StudyHistoryStep = ({ value, setValue }: Props) => {
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
              defaultValue={value.howMuchTimeStudySystemDesign}
              onChange={(event) =>
                setValue((old) => ({
                  ...old,
                  howMuchTimeStudySystemDesign: Number(event.target.value),
                }))
              }
              className="w-full"
            />
          </div>
          <div>
            <Select
              onValueChange={(value) => {
                setValue((old) => ({
                  ...old,
                  unity: value,
                }));
              }}
              defaultValue={value.unity}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select unit" defaultValue="months" />
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
