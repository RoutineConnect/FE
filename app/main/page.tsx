"use client";

import { getCookie } from "@/components/util/setCookie";

export default function MainPage() {
  const refreshToken = getCookie("REFRESH_TOKEN");
  console.log(refreshToken);
  return (
    <div>
      <div></div>
    </div>
  );
}
