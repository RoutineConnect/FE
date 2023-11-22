import teemo from "../../image/Teemo.png";
import Image from "next/image";
import IFace from "@/icon/iFace";
import IShared from "@/icon/iShared";
import IFeed from "@/icon/iFeed";
import ITropy from "@/icon/iTropy";
import ILogo from "@/icon/iLogo";

export default function Sidebar_L() {
  return (
    // wrapper
    <div className=" flex flex-col  pt-6 pl-10 w-sideBar h-screen relative text-color_default_text">
      {/* 루틴코넥트 로고 */}
      <div className=" mt-10 w-[177px] h-6">
        <ILogo />
      </div>
      {/* routine place - wrapper */}
      <div className=" mt-24">
        {/* title */}
        <span className=" text-color_sub_text text-sm">Routine Place</span>
        {/* my routine */}
        <div className=" flex justify-start mt-10">
          <div className=" fill-color_main_text w-[18px]">
            <IFace />
          </div>
          <span className=" text-sideBar font-semibold ml-3">마이 루틴</span>
        </div>
        {/* share / challenge */}
        <div className=" flex justify-start mt-7">
          <div className=" fill-color_main_text w-[18px]">
            <IShared />
          </div>
          <span className=" text-sideBar font-semibold ml-3">공유 / 챌린지</span>
        </div>
        {/* Feed */}
        <div className=" flex justify-start mt-7">
          <div className=" fill-color_main_text w-[18px]">
            <IFeed />
          </div>
          <span className=" text-sideBar font-semibold ml-3">피드</span>
        </div>
        {/* My Place - wrapper */}
        <div className=" mt-20">
          {/* title */}
          <span className=" text-color_sub_text text-sm">My Place</span>
          {/* Profile */}
          <div className=" flex justify-start mt-10">
            <div className=" fill-color_main_text w-[18px]">
              <IFace />
            </div>
            <span className=" text-sideBar font-semibold ml-3">프로필</span>
          </div>
        </div>
        {/* explain */}
        <div className=" mt-64 flex space-x-2">
          {/* today */}
          <div className=" flex items-center">
            {/* ball */}
            <div className=" w-2 h-2 bg-blue-600 rounded-full"></div>
            {/* text */}
            <span className=" font-semibold text-sm ml-1">Today</span>
          </div>
          {/* 달성 */}
          <div className=" flex items-center">
            {/* ball */}
            <div className=" w-2 h-2 bg-green-400 rounded-full"></div>
            {/* text */}
            <span className=" font-semibold text-sm ml-1">달성</span>
          </div>
          {/* 중간 */}
          <div className=" flex items-center">
            {/* ball */}
            <div className=" w-2 h-2 bg-yellow-400 rounded-full"></div>
            {/* text */}
            <span className=" font-semibold text-sm ml-1">중간</span>
          </div>
          {/* 미래 */}
          <div className=" flex items-center">
            {/* ball */}
            <div className=" w-2 h-2 bg-color_sub_text rounded-full"></div>
            {/* text */}
            <span className=" font-semibold text-sm ml-1">미래</span>
          </div>
        </div>
        {/* User */}
        <div className=" flex items-center mt-10">
          {/* avatar */}
          <div className=" w-11 h-11 rounded-full relative overflow-hidden">
            <Image src={teemo} alt="teemo avatar" layout="fill" />
          </div>
          {/* contents */}
          <div className=" ml-2">
            {/* username */}
            <span className=" text-base text-color_default_text font-semibold">Teemo</span>
            {/* tropy */}
            <div className=" flex items-center">
              {/* icon */}
              <div className=" w-4 fill-yellow-400">
                <ITropy />
              </div>
              {/* payload */}
              <span className=" text-sm text-color_sub_text ml-1">the Swift Scout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
