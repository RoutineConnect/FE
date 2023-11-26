import AuthChek from "@/components/auth/authCheck";
import "./globals.css";
import type { Metadata } from "next";

import Head from "next/head";
import RecoilProvider from "@/components/provider/recoilProvider";
import ReactQueryProvider from "@/components/provider/reactQueryProvider";

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
        <RecoilProvider>
          <ReactQueryProvider>
            {/* 전체적으로 로그인 상태를 확인해주는 함수 호출 */}
            <AuthChek />
            {children}
          </ReactQueryProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}
