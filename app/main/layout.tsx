import Sidebar from "@/components/Layout/SideBar-L";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Wrapper
    <div className=" flex justify-between w-full h-screen bg-blue-200 bg-opacity-20">
      {/* col - sideBar - left */}
      <div className=" bg-white w-sideBar h-screen">
        <Sidebar />
      </div>
      {/* main */}
      <div className="">{children}</div>
      {/* col - sideBar - right */}
      <div className=" bg-white w-sideBar h-screen"></div>
    </div>
  );
}
