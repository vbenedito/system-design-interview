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
import { Settings, Swords } from "lucide-react";
import { usePathname } from "next/navigation";
import { UserInfos } from "./user-infos";
import { Logo } from "@/components/logo";
import { Session } from "next-auth";

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
              <DashboardSidebarNavLink
                href="/app/settings"
                active={isActive("/app/settings")}
              >
                <Settings className="w-3 h-3 mr-3" />
                Configurações
              </DashboardSidebarNavLink>
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
