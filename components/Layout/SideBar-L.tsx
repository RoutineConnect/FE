import IBars4 from "@/Icon/IBars4";
import IFeed from "@/Icon/IFeed";
import IHome from "@/Icon/IHome";
import IShared from "@/Icon/IShared";
function Sidebar() {
  return (
    // wrapper
    <div className=" flex flex-col  pt-6 pl-10 h-screen w-64 relative">
      {/* 대표 아이콘 */}
      <div className=" mt-7 font-bold text-3xl">RoutineConnect</div>
      {/* menue */}
      <div className=" mt-5 ml-3">
        {/* 홈 */}
        <div className=" flex items-center mt-10">
          <div className=" w-7">
            <IHome />
          </div>
          <span className=" ml-3 text-sideBar font-semibold">홈</span>
        </div>
        {/* 챌린지 공유 */}
        <div className=" flex items-center mt-10">
          <div className=" w-7">
            <IShared />
          </div>
          <span className=" ml-3 text-sideBar font-semibold">
            공유 / 챌린지
          </span>
        </div>
        {/* 피드 */}
        <div className=" flex items-center mt-10">
          <div className=" w-7">
            <IFeed />
          </div>
          <span className=" ml-3 text-sideBar font-semibold">
            공유 / 챌린지
          </span>
        </div>
        {/* 프로필 */}
        <div className=" flex items-center mt-10">
          <div className=" w-7">
            <IFeed />
          </div>
          <span className=" ml-3 text-sideBar font-semibold">프로필</span>
        </div>
      </div>
      {/* 더보기 */}
      <div className="flex items-center fixed bottom-3 left-7 p-4">
        <div className="w-7">
          <IBars4 />
        </div>
        <div className=" ml-3 text-sideBar font-semibold">더보기</div>
      </div>
    </div>
  );
}

export default Sidebar;
