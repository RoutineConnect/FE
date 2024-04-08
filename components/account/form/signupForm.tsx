"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import ErrorForm from "./errorForm";
import { useState } from "react";
import axios from "axios";
import { accountApis } from "@/Api/account/accountAPI";

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
    if (emailCheckStatus === false) {
      setError("email", {
        type: "existCheck",
        message: "이메일 중복체크를 진행해 주세요.",
      });
      return;
    }
    if (nameCheckStatus === false) {
      setError("name", {
        type: "existCheck",
        message: "이름 중복체크를 진행해 주세요",
      });
    }
    clearErrors("result");
    try {
      const { email, name, password } = getValues();
      const res = await accountApis.signup({
        email,
        name,
        password,
      });
      sessionStorage.setItem("signupEmail", email);
      sessionStorage.setItem("signupPassword", password);
      console.log("Response:", res.data);
      window.location.reload();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data.message);
      }
    }
  };
  const watchPassword = watch("password", "");

  const [emailCheckStatus, setEmailCheckStatus] = useState(false);
  const [nameCheckStatus, setNameCheckStatus] = useState(false);
  const existEmailCheckHandler = async () => {
    const email = watch("email");
    try {
      const res = await accountApis.existEmailCheck({ email });
      if (res.data.is_duplicated) {
        setError("email", {
          type: "manual",
          message: res.data.message,
        });
      } else {
        window.alert("사용가능한 아이디입니다.");
        setEmailCheckStatus(true);
        clearErrors("email");
      }
    } catch (error) {
      console.log(error);
      window.location.reload;
    }
  };

  const existNameCheckHandler = async () => {
    const name = watch("name");
    try {
      const res = await accountApis.existNameCheck({ name });
      if (res.data.is_duplicated) {
        setError("name", {
          type: "disabled",
          message: res.data.message,
        });
      } else {
        alert("사용가능한 이름 입니다.");
        setNameCheckStatus(true);
        clearErrors("name");
      }
    } catch (error) {
      console.log(error);
      window.location.reload;
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmitValid)} className=" flex flex-col mt-5">
      {/* 이메일 입력 */}
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
            setEmailCheckStatus(false);
            console.log("작성된 유저 이메일이 변경되어 체크 확인값이 변경되었습니다.");
          }}
          type="text"
          placeholder="이메일"
          className=" focus:outline-0 w-full focus:border-color_accent_text h-LoginInput border border-color_sub_text rounded-md  p-1 pl-4 placeholder:text-sm "
        />
        <div
          className="text-sm w-[110px] flex justify-center items-center rounded-md text-white bg-color_main_text"
          onClick={() => {
            if (!(errors.email?.type === "pattern" || errors.email?.type === "required" || getValues("email") === "")) {
              existEmailCheckHandler();
            }
          }}
        >
          중복확인
        </div>
      </div>
      {/* 이름 입력 */}
      <div className="flex w-LoginInput space-x-2 mt-5">
        <input
          {...register("name", {
            required: "유저명을 입력해주세요",
          })}
          onChange={() => {
            setNameCheckStatus(false);
            console.log("작성된 유저 이름이 변경되어 체크 확인값이 변경되었습니다.");
          }}
          type="text"
          placeholder="유저명"
          className=" focus:outline-0 w-full focus:border-color_accent_text h-LoginInput border border-color_sub_text rounded-md  p-1 pl-4 placeholder:text-sm "
        />
        <div
          className="text-sm w-[110px] flex justify-center items-center rounded-md text-white bg-color_main_text"
          onClick={() => {
            if (!(errors.name?.type === "pattern" || errors.name?.type === "required" || getValues("name") === "")) {
              existNameCheckHandler();
            }
          }}
        >
          중복확인
        </div>
      </div>
      {/* 비밀번호 입력 */}
      <input
        {...register("password", {
          required: "비밀번호를 입력해주세요",
        })}
        type="password"
        placeholder="비밀번호"
        className=" focus:outline-0  focus:border-color_accent_text  w-LoginInput h-LoginInput border border-color_sub_text rounded-md mt-5 p-1 pl-4 placeholder:text-sm"
      />
      {/* 비밀번호 확인 입력 */}
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
        <ErrorForm message={errors.result?.message} />
      </div>
      {/* 회원가입 버튼 */}
      <button type="submit" className=" w-LoginInput h-LoginInput p-1 mt-2 rounded-md text-white bg-color_main_text">
        회원가입
      </button>
    </form>
  );
}
