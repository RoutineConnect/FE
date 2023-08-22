"use client";

import { LoginValue } from "@/atom";
import { useRecoilState } from "recoil";

export default function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginValue);
  const LoginHandler = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className=" flex flex-col items-center w-LoginForm h-LoginForm">
      <div className=" mt-24 font-bold text-3xl">Login</div>
      <div className=" mt-10 flex w-[270px] justify-around">
        <div className=" border-2 border-gray-400 w-20 h-10 rounded-xl flex justify-center items-center">
          G
        </div>
        <div className=" border-2 border-gray-400 w-20 h-10 rounded-xl flex justify-center items-center">
          FB
        </div>
        <div className=" border-2 border-gray-400 w-20 h-10 rounded-xl flex justify-center items-center">
          K
        </div>
      </div>
      <span className=" mt-5 text-gray-300">Login to your Account</span>
      <form className=" flex flex-col mt-5">
        <input
          type="text"
          placeholder="ID"
          className=" focus:outline-0 focus:border-LoginBlue w-[250px] border border-gray-400 rounded-2xl  p-1 pl-4 placeholder:text-sm "
        />
        <input
          type="text"
          placeholder="PASSWORD"
          className=" focus:outline-0  focus:border-LoginBlue  w-[250px] border border-gray-400 rounded-2xl mt-5 p-1 pl-4 placeholder:text-sm"
        />
        <div
          //   type="submit"
          className=" w-[250px] p-1 mt-10 rounded-2xl text-white bg-LoginBlue
           flex justify-center items-center"
          onClick={LoginHandler}
        >
          로그인
        </div>
      </form>
      <div className=" text-xs">
        <div className=" flex justify-center items-center  mt-7">
          <span className=" text-gray-300">아이디를 잃어버렸나요?</span>
          <div className="ml-3 text-gray-400 hover:text-LoginBlue">
            아이디 찾기
          </div>
        </div>
        <div className=" flex justify-center items-center  mt-1 ">
          <span className=" text-gray-300">비밀번호를 잃어버렸나요?</span>
          <div className=" ml-3 text-gray-400 hover:text-LoginBlue">
            비밀번호 찾기
          </div>
        </div>
      </div>
    </div>
  );
}
