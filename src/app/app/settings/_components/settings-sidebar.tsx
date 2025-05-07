"use client";

import {
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
} from "@/components/dashboard/sidebar";
import { usePathname } from "next/navigation";

export function SettingsSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <aside>
      <DashboardSidebarNav>
        <DashboardSidebarNavMain>
          <DashboardSidebarNavLink
            href="/app/settings"
            active={isActive("/app/settings")}
          >
            My Profile
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink
            href="/app/settings/billing"
            active={isActive("/app/billing")}
          >
            Billing
          </DashboardSidebarNavLink>
        </DashboardSidebarNavMain>
      </DashboardSidebarNav>
    </aside>
  );
}
