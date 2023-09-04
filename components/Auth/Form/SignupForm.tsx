export default function SignupForm() {
  return (
    <div className=" flex flex-col items-center w-LoginForm h-LoginForm">
      <div className=" mt-[86px] font-bold text-3xl text-color_main_text">
        Sign-up
      </div>
      <span className=" mt-5 text-gray-300">Create your Account</span>
      <form className=" flex flex-col mt-5">
        <input
          type="text"
          placeholder="이메일"
          className=" focus:outline-0 focus:border-color_accent_text w-LoginInput h-LoginInput border border-color_sub_text rounded-md  p-1 pl-4 placeholder:text-sm "
        />
        <input
          type="text"
          placeholder="유저명"
          className=" focus:outline-0  focus:border-color_accent_text  w-LoginInput h-LoginInput border border-color_sub_text rounded-md mt-5 p-1 pl-4 placeholder:text-sm"
        />
        <input
          type="text"
          placeholder="비밀번호"
          className=" focus:outline-0  focus:border-color_accent_text  w-LoginInput h-LoginInput border border-color_sub_text rounded-md mt-5 p-1 pl-4 placeholder:text-sm"
        />
        <input
          type="text"
          placeholder="비밀번호 확인"
          className=" focus:outline-0  focus:border-color_accent_text  w-LoginInput h-LoginInput border border-color_sub_text rounded-md mt-5 p-1 pl-4 placeholder:text-sm"
        />
        {/* 에러 Form */}
        <div className=" mt-3"></div>
        <button
          type="submit"
          className=" w-LoginInput h-LoginInput p-1 mt-2 rounded-md text-white bg-color_main_text"
        >
          회원가입
        </button>
      </form>
      <div className=" text-xs">
        <div className=" flex justify-center items-center  mt-7">
          <span className=" text-gray-300">아이디를 잃어버렸나요?</span>
          <div className="ml-3 text-gray-400 hover:text-color_accent_text">
            아이디 찾기
          </div>
        </div>
        <div className=" flex justify-center items-center  mt-1 ">
          <span className=" text-gray-300">비밀번호를 잃어버렸나요?</span>
          <div className=" ml-3 text-gray-400 hover:text-color_accent_text">
            비밀번호 찾기
          </div>
        </div>
      </div>
    </div>
  );
}
