import LoginBlock from "@/components/account/ui/loginBlock";
import LoginUi from "@/components/account/ui/loginUi";
import SignupUi from "@/components/account/ui/signupUi";

export default function Account() {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className=" flex relative  shadow-2xl rounded-2xl">
        <LoginBlock />
        <LoginUi />
        <SignupUi />
      </div>
    </div>
  );
}
