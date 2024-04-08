export const setTokenCookie = (token: string) => {
  if (typeof document !== "undefined") {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);
    const expires = "expires=" + expirationDate.toUTCString();
    document.cookie = "TOKEN" + "=" + token + "; " + expires + "; path=/";
  }
};

export const setPrivateTokenCookie = (token: string) => {
  if (typeof document !== "undefined") {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);
    const expires = "expires=" + expirationDate.toUTCString();
    const secure = "secure";
    const httponly = "httponly";
    document.cookie = "REFRESH_TOKEN" + "=" + token + "; " + expires + "; path=/; " + secure + "; " + httponly;
    // document.cookie = "REFRESH_TOKEN" + "=" + token + "; " + expires + "; path=/" + httponly;
  }
};

export const getCookie = (data: string) => {
  if (typeof document !== "undefined" && document !== null) {
    const cookieName = data + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "null";
  } else {
    return "없음";
  }
};

export const deleteCookie = () => {
  if (typeof document !== "undefined") {
    document.cookie = "TOKEN" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "REFRESH_TOKEN" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
};
