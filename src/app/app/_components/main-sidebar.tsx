"use client";

import {
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain,
  DashboardSidebar,
  DashboardSidebarHeader,
  DashboardSidebarFooter,
} from "@/components/dashboard/sidebar";
import { Settings, Swords, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { UserInfos } from "./user-infos";
import { Logo } from "@/components/logo";
import { Session } from "next-auth";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type Props = {
  user: Session["user"];
};

export function MainSidebar({ user }: Props) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div>
      <DashboardSidebar>
        <DashboardSidebarHeader>
          <Logo />
        </DashboardSidebarHeader>
        <DashboardSidebarMain className="flex flex-col flex-grow">
          <DashboardSidebarNav>
            <DashboardSidebarNavMain>
              <DashboardSidebarNavLink
                href="/app/challenges"
                active={isActive("/app/challenges")}
              >
                <Swords className="w-3 h-3 mr-3" />
                Desafios
              </DashboardSidebarNavLink>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center text-xs px-3 py-2 rounded-md">
                  <Settings className="w-3 h-3 mr-3" />
                  Configurações
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-5">
                  <DashboardSidebarNavLink
                    href="/app/settings"
                    active={isActive("/app/settings")}
                  >
                    <User className="w-3 h-3 mr-3" />
                    Profile
                  </DashboardSidebarNavLink>
                </CollapsibleContent>
                <CollapsibleContent className="ml-5">
                  <DashboardSidebarNavLink
                    href="/app/billing"
                    active={isActive("/app/billing")}
                  >
                    <Settings className="w-3 h-3 mr-3" />
                    Billing
                  </DashboardSidebarNavLink>
                </CollapsibleContent>
              </Collapsible>
            </DashboardSidebarNavMain>
          </DashboardSidebarNav>

          <DashboardSidebarNav className="mt-auto">
            <DashboardSidebarNavHeader>
              <DashboardSidebarNavHeaderTitle>
                Links extras
              </DashboardSidebarNavHeaderTitle>
            </DashboardSidebarNavHeader>
            <DashboardSidebarNavMain>
              <DashboardSidebarNavLink href="/">
                Precisa de ajuda?
              </DashboardSidebarNavLink>
              <DashboardSidebarNavLink href="/">Site</DashboardSidebarNavLink>
            </DashboardSidebarNavMain>
          </DashboardSidebarNav>
        </DashboardSidebarMain>
        <DashboardSidebarFooter>
          <UserInfos user={user} />
        </DashboardSidebarFooter>
      </DashboardSidebar>
    </div>
  );
}
