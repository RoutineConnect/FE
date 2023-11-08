import Sidebar_L from "@/components/layout/sideBar_L";
import SideBar_R from "@/components/layout/sideBar_R";
import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    // Wrapper
    <div className=" flex justify-between w-full h-screen bg-color_bg">
      {/* col - sideBar - left */}
      <div className=" bg-white h-screen">
        <Sidebar_L />
      </div>
      {/* main */}
      <div className=" w-full">{children}</div>
      {/* col - sideBar - right */}
      <div className=" bg-white h-screen">
        <SideBar_R />
      </div>
    </div>
  );
}
