"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import ErrorForm from "./errorForm";
import SignupAPI from "@/API/auth/signupApi";

interface ISignupForm {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
}

export default function SignupForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError,
  } = useForm<ISignupForm>({
    mode: "onChange",
  });

  const onSubmitValid: SubmitHandler<ISignupForm> = async (data) => {
    try {
      const response = await SignupAPI({
        email: data.email,
        name: data.name,
        password: data.password,
      });
      console.log("Response:", response.data);
      // Handle the response data accordingly
    } catch (error) {
      console.error("Error:", error);
      // if (error) {
      //   setError("email", {
      //     message: error.msg,
      //   });
      // }
    }
  };
  const watchPassword = watch("password", "");
  return (
    <div className=" flex flex-col items-center w-LoginForm h-LoginForm">
      <div className=" mt-[86px] font-bold text-3xl text-color_main_text">Sign-up</div>
      <span className=" mt-5 text-gray-300">Create your Account</span>
      <form onSubmit={handleSubmit(onSubmitValid)} className=" flex flex-col mt-5">
        <input
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/,
              message: "이메일 형식을 지켜서 입력해주세요",
            },
          })}
          type="text"
          placeholder="이메일"
          className=" focus:outline-0 focus:border-color_accent_text w-LoginInput h-LoginInput border border-color_sub_text rounded-md  p-1 pl-4 placeholder:text-sm "
        />
        <input
          {...register("name", {
            required: "유저명을 입력해주세요",
          })}
          type="text"
          placeholder="유저명"
          className=" focus:outline-0  focus:border-color_accent_text  w-LoginInput h-LoginInput border border-color_sub_text rounded-md mt-5 p-1 pl-4 placeholder:text-sm"
        />
        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요",
          })}
          type="password"
          placeholder="비밀번호"
          className=" focus:outline-0  focus:border-color_accent_text  w-LoginInput h-LoginInput border border-color_sub_text rounded-md mt-5 p-1 pl-4 placeholder:text-sm"
        />
        <input
          {...register("passwordCheck", {
            required: "비밀번호를 확인 해주세요",
            validate: (value) => value === watchPassword || "비밀번호가 일치하지 않습니다",
          })}
          type="password"
          placeholder="비밀번호 확인"
          className=" focus:outline-0  focus:border-color_accent_text  w-LoginInput h-LoginInput border border-color_sub_text rounded-md mt-5 p-1 pl-4 placeholder:text-sm"
        />
        {/* 에러 Form */}
        <div className={` mt-3 flex flex-col items-center `}>
          <ErrorForm message={errors.email?.message} />
          <ErrorForm message={errors.name?.message} />
          <ErrorForm message={errors.password?.message} />
          <ErrorForm message={errors.passwordCheck?.message} />
        </div>
        <button type="submit" className=" w-LoginInput h-LoginInput p-1 mt-2 rounded-md text-white bg-color_main_text">
          회원가입
        </button>
      </form>
      <div className=" text-xs">
        <div className=" flex justify-center items-center  mt-7">
          <span className=" text-gray-300">아이디를 잃어버렸나요?</span>
          <div className="ml-3 text-gray-400 hover:text-color_accent_text">아이디 찾기</div>
        </div>
        <div className=" flex justify-center items-center  mt-1 ">
          <span className=" text-gray-300">비밀번호를 잃어버렸나요?</span>
          <div className=" ml-3 text-gray-400 hover:text-color_accent_text">비밀번호 찾기</div>
        </div>
      </div>
    </div>
  );
}
