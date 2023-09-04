import Sidebar_L from "@/components/Layout/SideBar-L";
import SideBar_R from "@/components/Layout/SideBar-R";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
