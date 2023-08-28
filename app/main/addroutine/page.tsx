export default function addroutine() {
  return (
    // Wrapper
    <div className=" flex flex-col justify-items-start text-xl space-y-10 my-[200px] mr-[50px]">
      {/* 루틴이름-input */}
      <div className="flex justify-between items-center bg-gray-300 bg-opacity-75 px-[15px] py-3 rounded-xl font-semibold">
        <span>루틴 이름</span>
        <input type="text" className="sr-only ml-5 text-2xl  "/>
      </div>
      {/* 알람-wrapper */}
      <div>
      <div className="flex justify-between items-center bg-gray-300 bg-opacity-75 px-[15px] py-3 rounded-t-lg border-b border-black font-semibold">
      <span>알람</span>
      <input type="checkbox" className="sr-only ml-9 transform scale-125 w-6 h-6"></input>
      <span className="bg-gray-100 relative w-20 h-10 rounded-full">
      <span className="w-2/5 h-4/5 bg-gray-300 absolute rounded-full left-1 top-1"></span>
      </span>
      </div>

    
      {/* 시간 */}
      <div className="flex justify-between items-center bg-gray-300 bg-opacity-75 px-[15px] py-3 rounded-b-lg font-semibold">
        <span>시간</span>
        {/* 페이지 이동 버튼 */}
        <div>
        <input type="button" value="ex) 8시/출근길" className="bg-gray-300 text-black px-[50px] py-2 rounded-3xl hover:bg-gray-400 font-light"/>
      </div>
      </div>
      </div>
    
      {/* 반복주기-wrapper 반복설정이랑 반복주기 div하나 */}
      <div className=" flex justify-between items-center bg-gray-300 bg-opacity-75 px-[15px] py-3 rounded-xl font-semibold ">
        {/* 반복설정-text */}
        <span>반복주기</span>
        <input type="button" value="월,화,수,목,금,토,일 >" className="font-light"></input>
      </div>
      {/* 비공개-checkbox */}
      <div className="flex justify-between items-center bg-gray-300 bg-opacity-75 px-[15px] py-3 rounded-xl font-semibold">
        <span>비공개</span>
        <input type="checkbox" className="sr-only ml-9 transform scale-125 w-6 h-6 "></input>
        <span className="bg-gray-100 relative w-20 h-10 rounded-full">
      <span className="w-2/5 h-4/5 bg-gray-300 absolute rounded-full left-1 top-1"></span>
      </span>
      </div>
      {/* 추가하기-div or button */}
      <div>
        <input type="button" value="추가하기" className="bg-gray-300 text-black px-[300px] py-3 rounded-3xl hover:bg-gray-400 font-semibold"/>
      </div>
    </div>
  );
}
