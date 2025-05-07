import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";
import {
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
} from "@/components/dashboard/sidebar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Configurações</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <div className="grid grid-cols-[16rem_1fr]">
          <aside>
            <DashboardSidebarNav>
              <DashboardSidebarNavMain>
                <DashboardSidebarNavLink href="/app/settings">
                  My Profile
                </DashboardSidebarNavLink>
                <DashboardSidebarNavLink href="/app/settings/billing">
                  Billing
                </DashboardSidebarNavLink>
              </DashboardSidebarNavMain>
            </DashboardSidebarNav>
          </aside>
          <div>{children}</div>
        </div>
      </DashboardPageMain>
    </DashboardPage>
  );
}
