import { ChallengeGrid } from "@/app/app/challenges/_components/challenge-grid";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";
import { getChallenges } from "./actions";
import { redirect } from "next/navigation";

const Challenges = async () => {
  const challenges = await getChallenges();

  if (!challenges.length) {
    redirect("/app/settings");
  }

  return (
    <>
      <DashboardPage>
        <DashboardPageHeader>
          <DashboardPageHeaderTitle>Desafios</DashboardPageHeaderTitle>
        </DashboardPageHeader>
        <DashboardPageMain>
          <div className="min-h-screen">
            <div className="container mx-auto py-12 space-y-8">
              <ChallengeGrid challenges={challenges} />
            </div>
          </div>
        </DashboardPageMain>
      </DashboardPage>
    </>
  );
};

export default Challenges;
