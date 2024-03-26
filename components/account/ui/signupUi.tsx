import SignupForm from "../form/signupForm";

export default function SignupUi() {
  return (
    <div className=" flex flex-col items-center w-LoginForm h-LoginForm">
      <div className=" mt-[86px] font-bold text-3xl text-color_main_text">Sign-up</div>
      <span className=" mt-5 text-gray-300">Create your Account</span>
      <SignupForm />
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
