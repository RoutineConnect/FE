import Image from "next/image";
import googleBtn from "../../../image/google-login.png";
import kakaoBtn from "../../../image/kakao-login.png";
import LoginForm from "../form/loginForm";

export default function LoginUi() {
  return (
    <div className=" flex flex-col items-center w-LoginForm h-LoginForm">
      {/* 타이틀 */}
      <div className=" mt-[86px] font-bold text-3xl text-color_main_text">Login</div>
      {/* 서브 타이틀 */}
      <span className=" mt-5 text-color_sub_text">Login to your Account</span>
      {/* 로그인 폼 */}
      <LoginForm />
      {/* 소셜 로그인 */}
      <div className=" mt-2 flex flex-col  w-LoginInput justify-between -z-[99999] ">
        {/* google */}
        <div className="flex justify-center items-center w-LoginInput h-LoginInput p-2 bg-white rounded-xl mt-2 shadow-md">
          <div className=" flex justify-center items-center">
            <div className=" w-[30px] h-[30px]  relative mx-3">
              <Image src={googleBtn} alt="google" fill={true} />
            </div>
            <span className=" text-[#000000] opacity-85">구글 로그인</span>
          </div>
        </div>
        {/* kakao */}
        <div className=" flex justify-center items-center w-LoginInput h-LoginInput p-2 bg-kakaoBg rounded-xl mt-2 shadow-md">
          <div className=" flex justify-center items-center">
            <div className=" w-[36px] h-[36px]  relative mx-2">
              <Image src={kakaoBtn} alt="google" fill={true} />
            </div>
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
