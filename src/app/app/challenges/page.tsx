"use client";

import { useState } from "react";
import { ChallengeGrid } from "@/app/app/challenges/_components/challenge-grid";
import { DifficultyFilter } from "@/app/app/challenges/_components/difficulty-filter";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";

const Challenges = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );

  return (
    <>
      <DashboardPage>
        <DashboardPageHeader>
          <DashboardPageHeaderTitle>Configurações</DashboardPageHeaderTitle>
        </DashboardPageHeader>
        <DashboardPageMain>
          <div className="min-h-screen">
            <div className="container mx-auto py-12 space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <DifficultyFilter
                  selectedDifficulty={selectedDifficulty}
                  onSelectDifficulty={setSelectedDifficulty}
                />
              </div>

              <ChallengeGrid selectedDifficulty={selectedDifficulty} />
            </div>
          </div>
        </DashboardPageMain>
      </DashboardPage>
    </>
  );
};

export default Challenges;
