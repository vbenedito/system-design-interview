import { UserInfosSteps } from "@/app/_components/onboarding-steps/user-infos-steps";
import { getUserById } from "@/app/onboarding/actions";
import { auth } from "@/service/auth";
import { UserProps } from "@/types/User";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  const userId = session?.user?.id as string;

  if (!userId) {
    redirect("/auth");
  }

  const user = (await getUserById(userId)) as UserProps;

  return (
    <div className="flex items-center justify-center dark:from-brand-950/30 dark:via-background dark:to-background">
      <div className="w-full space-y-8 animate-fade-in">
        <UserInfosSteps {...user} />
      </div>
    </div>
  );
}
