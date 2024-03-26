"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import ErrorForm from "./errorForm";
import { useState } from "react";
import axios from "axios";
import SignupAPI from "@/Api/account/signupAPI";
import ExistUserCheckAPI from "@/Api/account/existUserCheckAPI";

interface ISignupForm {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
  result: string;
}

export default function SignupForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError,
    getValues,
    clearErrors,
  } = useForm<ISignupForm>({
    mode: "onBlur",
  });

  const onSubmitValid: SubmitHandler<ISignupForm> = async () => {
    if (isCheckedUser === false) {
      setError("email", {
        type: "emailCheck",
        message: "중복체크를 진행해 주세요.",
      });
      return;
    }
    clearErrors("result");
    try {
      const { email, name, password } = getValues();
      const response = await SignupAPI({
        email,
        name,
        password,
      });
      sessionStorage.setItem("signupEmail", email);
      sessionStorage.setItem("signupPassword", password);
      console.log("Response:", response.data);
      window.location.reload();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data.message);
      }
    }
  };
  const watchPassword = watch("password", "");

  const watchUserEmail = watch("email");

  const [isCheckedUser, setIsCheckedUser] = useState(false);
  const existUserCheckHandler = async () => {
    console.log(watchUserEmail, watchPassword);
    try {
      const response = await ExistUserCheckAPI(watchUserEmail);

      if (response.data.is_duplicated) {
        setError("email", {
          type: "manual",
          message: response.data.message,
        });
      } else {
        window.alert("사용가능한 아이디입니다.");
        setIsCheckedUser(true);
        clearErrors("email");
        console.log("중복유저 테스트 결과가 수정되었습니다. ", isCheckedUser);
      }
    } catch (error) {
      console.log(error);
      window.location.reload;
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitValid)}
      className=" flex flex-col mt-5"
    >
      <div className="flex w-LoginInput space-x-2">
        <input
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/,
              message: "이메일 형식을 지켜서 입력해주세요",
            },
          })}
          onChange={() => {
            setIsCheckedUser(false);
            console.log(
              "작성된 유저 아이디가 변경되어 체크 확인값이 변경되었습니다."
            );
          }}
          type="text"
          placeholder="이메일"
          className=" focus:outline-0 w-full focus:border-color_accent_text h-LoginInput border border-color_sub_text rounded-md  p-1 pl-4 placeholder:text-sm "
        />
        <div
          className="text-sm w-[110px] flex justify-center items-center rounded-md text-white bg-color_main_text"
          onClick={
            errors.email?.type === "emailCheck" ||
            errors.email?.type !== "pattern" ||
            errors.email.type !== "required" ||
            getValues("email") !== ""
              ? existUserCheckHandler
              : undefined
          }
        >
          중복확인
        </div>
      </div>
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
          validate: (value) =>
            value === watchPassword || "비밀번호가 일치하지 않습니다",
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
        <ErrorForm message={errors.result?.message} />
      </div>
      <button
        type="submit"
        className=" w-LoginInput h-LoginInput p-1 mt-2 rounded-md text-white bg-color_main_text"
      >
        회원가입
      </button>
    </form>
  );
}
