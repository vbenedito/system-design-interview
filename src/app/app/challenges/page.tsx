import { ChallengeGrid } from "@/app/app/challenges/_components/challenge-grid";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";
import { getChallenges } from "./actions";

const Challenges = async () => {
  const challenges = await getChallenges();

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
