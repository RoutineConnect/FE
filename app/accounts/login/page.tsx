import LoginBlock from "@/components/Auth/LoginBlock";
import LoginForm from "@/components/Auth/LoginForm";

export default function login() {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      {/* Wrapper */}
      <div className=" flex relative  shadow-2xl rounded-2xl">
        <LoginBlock />
        {/* Login */}
        <LoginForm />
        {/* Signup */}
        <div className=" flex flex-col items-center w-LoginForm h-LoginForm">
          <div className=" mt-24 font-bold text-3xl">Sign-up</div>
          <span className=" mt-5 text-gray-300">Create your Account</span>
          <form className=" flex flex-col mt-5">
            <input
              type="text"
              placeholder="EMAIL"
              className=" focus:outline-0 focus:border-LoginBlue w-[250px] border border-gray-400 rounded-2xl  p-1 pl-4 placeholder:text-sm "
            />
            <input
              type="text"
              placeholder="USERNAME"
              className=" focus:outline-0  focus:border-LoginBlue  w-[250px] border border-gray-400 rounded-2xl mt-5 p-1 pl-4 placeholder:text-sm"
            />
            <input
              type="text"
              placeholder="PASSWORD"
              className=" focus:outline-0  focus:border-LoginBlue  w-[250px] border border-gray-400 rounded-2xl mt-5 p-1 pl-4 placeholder:text-sm"
            />
            <input
              type="text"
              placeholder="PASSWORD CHECK"
              className=" focus:outline-0  focus:border-LoginBlue  w-[250px] border border-gray-400 rounded-2xl mt-5 p-1 pl-4 placeholder:text-sm"
            />
            <button
              type="submit"
              className=" w-[250px] p-1 mt-10 rounded-2xl text-white bg-LoginBlue"
            >
              회원가입
            </button>
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
      </div>
    </div>
  );
}
