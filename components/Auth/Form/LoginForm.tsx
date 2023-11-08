"use client";

import { LoginValue } from "@/atom";
import { useRecoilState } from "recoil";
import googleBtn from "../../../image/google-login.png";
import kakaoBtn from "../../../image/kakao-login.png";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

interface ILoginForm {
  ID: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>({
    mode: "onChange",
  });
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginValue);
  const LoginHandler = () => {
    setIsLoggedIn(true);
  };
  const onSubmitValid: SubmitHandler<ILoginForm> = () => {
    return null;
  };
  return (
    <div className=" flex flex-col items-center w-LoginForm h-LoginForm">
      {/* 타이틀 */}
      <div className=" mt-[86px] font-bold text-3xl text-color_main_text">Login</div>
      {/* 서브 타이틀 */}
      <span className=" mt-5 text-color_sub_text">Login to your Account</span>
      {/* 로그인 form */}
      <form onSubmit={handleSubmit(onSubmitValid)} className=" flex flex-col mt-5 items-center">
        {/* id */}
        <input
          {...register("ID", {
            required: "아이디를 입력해주세요",
            pattern: {
              value: /[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/,
              message: "이메일 형식을 지켜서 입력해주세요",
            },
          })}
          type="text"
          placeholder="아이디"
          className=" focus:outline-0 focus:border-color_accent_text w-LoginInput h-LoginInput border border-color_sub_text rounded-md  p-1 pl-4 placeholder:text-sm "
        />
        {/* 비밀번호 */}
        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요",
          })}
          type="password"
          placeholder="비밀번호"
          className=" focus:outline-0  focus:border-color_accent_text  w-LoginInput h-LoginInput border border-color_sub_text rounded-md mt-5 p-1 pl-4 placeholder:text-sm"
        />
        {/* 에러 Form */}
        <div className={` mt-3 flex flex-col items-center `}>
          {/* <ErrorForm message={errors.ID?.message} />
          <ErrorForm message={errors.password?.message} /> */}
        </div>
        {/* 로그인 버튼 */}
        <div
          //   type="submit"
          className=" w-LoginInput h-LoginInput p-1 mt-2 rounded-md text-white bg-color_main_text
           flex justify-center items-center"
          onClick={LoginHandler}
        >
          로그인
        </div>
      </form>
      <div className=" flex justify-between items-center w-LoginInput mt-3 ">
        <div className=" w-[100px] h-[0.2px] bg-gray-300"></div>
        <span className=" text-sm text-gray-400">또는</span>
        <div className=" w-[100px] h-[0.2px] bg-gray-300"></div>
      </div>
      {/* 소셜 로그인 */}
      <div className=" mt-2 flex flex-col  w-LoginInput justify-between -z-[99999] ">
        {/* kakao */}
        <div className="flex justify-center items-center w-LoginInput h-LoginInput p-2 bg-white rounded-xl mt-2 shadow-md">
          {/* contents Wrapper */}
          <div className=" flex justify-center items-center">
            {/* 이미지 */}
            <div className=" w-[30px] h-[30px]  relative mx-3">
              <Image src={googleBtn} alt="google" layout="fill" />
            </div>
            {/* text */}
            <span className=" text-[#000000] opacity-85">구글 로그인</span>
          </div>
        </div>
        {/* google */}
        <div className=" flex justify-center items-center w-LoginInput h-LoginInput p-2 bg-kakaoBg rounded-xl mt-2 shadow-md">
          {/* contents Wrapper */}
          <div className=" flex justify-center items-center">
            {/* 이미지 */}
            <div className=" w-[36px] h-[36px]  relative mx-2">
              <Image src={kakaoBtn} alt="google" layout="fill" />
            </div>
            {/* text */}
            <span className=" text-black opacity-85">카카오 로그인</span>
          </div>
        </div>
      </div>
      {/* 아이디 비밀번호 찾기 */}
      <div className=" text-xs">
        <div className=" flex justify-center items-center  mt-7">
          <span className=" text-gray-300">아이디를 잃어버렸나요?</span>
          <div className="ml-3 text-gray-400 hover:text-color_main_text">아이디 찾기</div>
        </div>
        <div className=" flex justify-center items-center  mt-1 ">
          <span className=" text-gray-300">비밀번호를 잃어버렸나요?</span>
          <div className=" ml-3 text-gray-400 hover:text-color_main_text">비밀번호 찾기</div>
        </div>
      </div>
    </div>
  );
}
