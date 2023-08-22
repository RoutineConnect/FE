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
          {children}
        </RecoilSet>
      </body>
    </html>
  );
}
