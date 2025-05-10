import { redirect } from "next/navigation";
import { OnboardingContainer } from "./_components/onboarding-container";
import { getUserById } from "./actions";
import { auth } from "@/service/auth";
import { UserProps } from "@/types/User";

const Onboarding = async () => {
  const session = await auth();

  const userId = session?.user?.id as string;

  if (!userId) {
    redirect("/auth");
  }

  const user = (await getUserById(userId)) as UserProps;

  if (user?.alreadyVisitedOnboardingPage) {
    redirect("/app/challenges");
  }

  return <OnboardingContainer />;
};

export default Onboarding;
