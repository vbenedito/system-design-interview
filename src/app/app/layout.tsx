import { PropsWithChildren } from "react";
import { MainSidebar } from "./_components/main-sidebar";

import { auth } from "@/service/auth";

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <div className="grid grid-cols-[15rem_1fr] h-screen">
      <MainSidebar user={session?.user} />
      <main>{children}</main>
    </div>
  );
}
