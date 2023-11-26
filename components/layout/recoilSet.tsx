"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

export default function RecoilSet({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <div>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
}
