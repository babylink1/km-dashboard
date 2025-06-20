import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

import BgMain from "@/src/assets/img/bg-main.jpg";
import { CSSProperties } from "react";

const MainPage = ({
  className,
  children,
  mainContainerStyle,
}: {
  className?: string;
  mainContainerStyle?: CSSProperties;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("flex w-full h-full", className)}>
      <DashboardSidebar className="h-full" />
      <div
        className="flex-1 h-full flex flex-col"
        style={{
          background: `url(${BgMain.src}) no-repeat center / 100% 100%`,
          ...mainContainerStyle,
        }}
      >
        <Header />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default MainPage;
