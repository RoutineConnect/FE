import Sidebar from "@/components/Layout/SideBar-L";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Wrapper
    <div className=" flex justify-between w-full h-screen">
      {/* col - sideBar - left */}
      <div className=" bg-slate-300 w-sideBar h-screen">
        <Sidebar />
      </div>
      {/* main */}
      <div>{children}</div>
      {/* col - sideBar - right */}
      <div className=" bg-slate-300 w-sideBar h-screen"></div>
    </div>
  );
}
