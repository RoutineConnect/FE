import LoginForm from "@/components/auth/form/loginForm";
import SignupForm from "@/components/auth/form/signupForm";
import LoginBlock from "@/components/auth/loginBlock";

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
