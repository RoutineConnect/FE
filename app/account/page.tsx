import LoginUi from "@/components/account/ui/loginUi";

export default function Account() {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className=" flex relative  shadow-2xl rounded-2xl">
        <LoginUi />
      </div>
    </div>
  );
}
