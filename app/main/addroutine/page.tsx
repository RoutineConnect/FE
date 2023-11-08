import SaveBtn from "@/components/mainPage/addRoutine/saveBtn";
import PrivateSet from "@/components/shared/backBtn";

export default function addroutine() {
  return (
    <div className="flex flex-col items-center  w-full min-w-[446px] h-full px-10 text-color_default_text relative">
      {/* title */}
      <div className=" mt-7">
        <span className=" font-semibold">루틴 추가하기</span>
      </div>
      {/* 루틴 이름 */}
      <input
        className=" mt-24 w-full h-11 rounded-lg px-7 placeholder:text-color_sub_text placeholder:text-sm outline-none"
        type="text"
        placeholder="루틴이름을 입력하세요"
      />
      {/* 언제할까요 */}
      <div className=" w-full flex flex-col mt-8">
        {/* title */}
        <span className=" flex justify-start font-semibold">언제 할까요</span>
        {/* 해시태그 */}
        <div className=" flex flex-wrap w-full text-sm font-semibold mt-3 space-x-2">
          <div className=" px-4 py-1 mb-2 bg-white rounded-xl hover:border hover:border-color_main_text">
            <span>출근길</span>
          </div>
          <div className=" px-4 py-1 mb-2 bg-white rounded-xl hover:border hover:border-color_main_text">
            <span>퇴근 후</span>
          </div>
          <div className=" px-4 py-1 mb-2 bg-white rounded-xl hover:border hover:border-color_main_text">
            <span>점심 먹고</span>
          </div>
          <div className=" px-4 py-1 mb-2 bg-white rounded-xl hover:border hover:border-color_main_text">
            <span>출근길</span>
          </div>
          <div className=" px-4 py-1 mb-2 bg-white rounded-xl hover:border hover:border-color_main_text">
            <span>일어나자 마자</span>
          </div>
        </div>
        {/* 입력 */}
        <input
          className=" mt-3 w-full h-11 rounded-lg px-7 placeholder:text-color_sub_text placeholder:text-sm outline-none"
          type="text"
          placeholder=" 예시) 8시, 출근길, 식사 후"
        />
      </div>
      {/* saperator */}
      <div className=" h-[1px] w-full bg-color_sub_text mt-5 mb-5"></div>
      {/* 시작일 */}
      <div className=" flex justify-between w-full">
        {/* title */}
        <span className=" font-semibold">시작일</span>
        {/* 캘린더 선택 */}
        <div className=" text-color_accent_text">2023.08.31</div>
      </div>
      {/* saperator */}
      <div className=" h-[1px] w-full bg-color_sub_text mt-5 mb-5"></div>
      {/* 반복주기 */}
      <div className=" flex flex-col w-full">
        {/* titltle */}
        <span className=" font-semibold">반복주기</span>
        {/* 요일 wrapper */}
        <div className=" flex justify-center">
          {/* 요일 선택 기능 */}
          <div className=" mt-7 flex w-full max-w-[700px] h-10 justify-between">
            {/* 요일 예시 ui */}
            <div className="flex flex-col bg-white px-2 justify-center items-center rounded-lg">
              <span className=" text-red-600">일</span>
              <div className=" w-1 h-1 rounded-full bg-color_accent_text"></div>
            </div>
            <div className="flex flex-col  px-2 justify-center items-center rounded-lg">
              <span>월</span>
            </div>
            <div className="flex flex-col  px-2 justify-center items-center rounded-lg">
              <span>화</span>
            </div>
            <div className="flex flex-col px-2 justify-center items-center rounded-lg">
              <span>수</span>
            </div>
            <div className="flex flex-col bg-white px-2 justify-center items-center rounded-lg">
              <span>목</span>
              <div className=" w-1 h-1 rounded-full bg-color_accent_text"></div>
            </div>
            <div className="flex flex-col bg-white px-2 justify-center items-center rounded-lg">
              <span>금</span>
              <div className=" w-1 h-1 rounded-full bg-color_accent_text"></div>
            </div>
            <div className="flex flex-col px-2 justify-center items-center rounded-lg">
              <span className=" text-blue-600">토</span>
            </div>
          </div>
        </div>
      </div>
      {/* saperator */}
      <div className=" h-[1px] w-full bg-color_sub_text mt-10 mb-5"></div>
      {/* 공개 설정 */}
      <div className=" flex w-full justify-between">
        <span className=" font-semibold">비공개</span>
        {/* OnOff Btn */}
        <PrivateSet />
      </div>
      {/* 추가 버튼 */}
      <SaveBtn />
    </div>
  );
}
