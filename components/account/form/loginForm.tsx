"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import ErrorForm from "./errorForm";

interface ILoginForm {
  email: string;
  password: string;
  result: string;
}

export default function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    setError,
    clearErrors,
  } = useForm<ILoginForm>({
    mode: "onBlur",
  });

  const onSubmitValid: SubmitHandler<ILoginForm> = async (data) => {
    // 로그인 api
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitValid)} className=" flex flex-col mt-5 items-center">
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
