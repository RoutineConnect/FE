import AuthChek from "@/components/Auth/AuthCheck";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import RecoilSet from "@/components/Layout/RecoilSet";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RotineConnect",
  description: "Create your perfect day with RotineConnect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilSet>
          {/* 전체적으로 로그인 상태를 확인해주는 함수 호출 */}
          <AuthChek />
          {/* test */}
          <div className=" flex w-[300px] justify-around absolute top-5 left-5">
            <div className=" w-10 h-10 bg-theme_a text-white flex justify-center items-center">
              a
            </div>
            <div className=" w-10 h-10 bg-theme_b text-white flex justify-center items-center">
              b
            </div>
            <div className=" w-10 h-10 bg-theme_c text-white flex justify-center items-center">
              c
            </div>
            <div className=" w-10 h-10 bg-theme_d text-white flex justify-center items-center">
              d
            </div>
            <div className=" w-10 h-10 bg-theme_e text-white flex justify-center items-center">
              e
            </div>
            <div className=" w-10 h-10 bg-theme_f text-white flex justify-center items-center">
              f
            </div>
          </div>
          {children}
        </RecoilSet>
      </body>
    </html>
  );
}
