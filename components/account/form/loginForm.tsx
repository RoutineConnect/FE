"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import ErrorForm from "./errorForm";
import { useEffect } from "react";
import LoginAPI from "@/Api/account/loginAPI";
import { setToken } from "@/Api/instance";
import { setCookie } from "@/components/util/setCookie";
import { useRouter } from "next/navigation";
import axios from "axios";

interface ILoginForm {
  email: string;
  password: string;
  result: string;
}

export default function LoginForm() {
  const router = useRouter();

  useEffect(() => {
    const signupEmail = sessionStorage.getItem("signupEmail");
    const signupPassword = sessionStorage.getItem("signupPassword");
    if (signupEmail !== null && signupPassword !== null) {
      setValue("email", signupEmail);
      setValue("password", signupPassword);
      sessionStorage.removeItem("signupEmail");
      sessionStorage.removeItem("signupPassword");
    }
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
    setValue,
    setError,
  } = useForm<ILoginForm>({
    mode: "onBlur",
  });

  const LoggedIn = (token: string) => {
    setToken(token);
    setCookie(token);
    console.log("로그인 성공");
    router.push("/main");
  };

  const onSubmitValid: SubmitHandler<ILoginForm> = async (data) => {
    try {
      const response = await LoginAPI({
        email: data.email,
        password: data.password,
      });
      LoggedIn(response.data.token);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("상태 : " + error.response?.status);
        console.log("에러 메시지 : " + error.response?.data);
        setError("result", {
          type: "validate",
          message: error.response?.data,
        });
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmitValid)}
        className=" flex flex-col mt-5 items-center"
      >
        {/* id */}
        <input
          {...register("email", {
            required: "아이디를 입력해주세요",
            pattern: {
              value: /[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/,
              message: "이메일 형식을 지켜서 입력해주세요",
            },
          })}
          onChange={() => {
            clearErrors("result");
          }}
          type="text"
          placeholder="아이디"
          className=" focus:outline-0 focus:border-color_accent_text w-LoginInput h-LoginInput border border-color_sub_text rounded-md  p-1 pl-4 placeholder:text-sm "
        />
        {/* 비밀번호 */}
        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요",
          })}
          onChange={() => {
            clearErrors("result");
          }}
          type="password"
          placeholder="비밀번호"
          className=" focus:outline-0  focus:border-color_accent_text  w-LoginInput h-LoginInput border border-color_sub_text rounded-md mt-5 p-1 pl-4 placeholder:text-sm"
        />
        {/* 에러 Form */}
        <div className={` mt-3 flex flex-col items-center `}>
          <ErrorForm message={errors.email?.message} />
          <ErrorForm message={errors.password?.message} />
          <ErrorForm message={errors.result?.message} />
        </div>
        {/* 로그인 버튼 */}
        <button
          type="submit"
          className=" w-LoginInput h-LoginInput p-1 mt-2 rounded-md text-white bg-color_main_text
           flex justify-center items-center"
        >
          로그인
        </button>
      </form>
      <div className=" flex justify-between items-center w-LoginInput mt-3 ">
        <div className=" w-[100px] h-[0.2px] bg-gray-300"></div>
        <span className=" text-sm text-gray-400">또는</span>
        <div className=" w-[100px] h-[0.2px] bg-gray-300"></div>
      </div>
    </>
  );
}
