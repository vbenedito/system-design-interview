"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex items-center justify-center dark:from-brand-950/30 dark:via-background dark:to-background">
      <div className="w-full space-y-8 animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle>Professional Background</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <ProfessionalStep /> */}
            professionalStep
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Study History</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <StudyHistoryStep /> */}
            studyHistory
          </CardContent>
        </Card>

        <Button className="w-full">Save</Button>
      </div>
    </div>
  );
}
