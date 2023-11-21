import AuthChek from "@/components/auth/authCheck";
import "./globals.css";
import type { Metadata } from "next";

import RecoilSet from "@/components/layout/recoilSet";
import Head from "next/head";

export const metadata: Metadata = {
  title: "RotineConnect",
  description: "Create your perfect day with RotineConnect",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"
        />
      </Head>
      <body className={`font-pretendard`}>
        <RecoilSet>
          {/* 전체적으로 로그인 상태를 확인해주는 함수 호출 */}
          <AuthChek />
          {children}
        </RecoilSet>
      </body>
    </html>
  );
}
