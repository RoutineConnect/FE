import LoginBlock from "@/components/Auth/LoginBlock";
import LoginForm from "@/components/Auth/Form/LoginForm";
import SignupForm from "@/components/Auth/Form/SignupForm";

export default function login() {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      {/* Wrapper */}
      <div className=" flex relative  shadow-2xl rounded-2xl">
        <LoginBlock />
        {/* Login */}
        <LoginForm />
        {/* Signup */}
        <SignupForm />
      </div>
    </div>
  );
}
