"use client";

import { accountApis } from "@/Api/account/accountAPI";
import { getCookie, setTokenCookie } from "@/components/util/setCookie";
import axios from "axios";

export default function MainPage() {
  const onClick = async () => {
    try {
      const res = await accountApis.getAccessTokenFromRefreshToken();
      if (res.status === 200) {
        setTokenCookie(res.data.access_token);
        console.log(res.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
      }
    }
  };
  return (
    <div>
      <div className=" w-20 h-20 border-black border" onClick={onClick}>
        버튼
      </div>
    </div>
  );
}
