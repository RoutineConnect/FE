export default function addroutine() {
  return (
    // Wrapper
    <div className=" flex flex-col justify-items-start text-xl space-y-10 my-[200px] mr-[150px]">
      {/* 루틴이름-input */}
      <div className="flex justify-between items-center">
        <span>루틴 이름</span>
        <input type="text" className="ml-5 text-2xl  "/>
      </div>
      {/* 알람-wrapper */}
      <div className="flex justify-between items-center">
        <span>알람</span>
        <input type="checkbox" className="ml-9 transform scale-125 w-6 h-6"></input>
      </div>
      {/* 시간 */}
      <div className="flex justify-between items-center">
        {/* 시간 글씨 */}
        <span>시간</span>
        {/* 페이지 이동 버튼 */}
        <div>
        <input type="button" value="언제 할래요?" className="bg-gray-300 text-black px-[50px] py-2 rounded-3xl hover:bg-gray-400"/>
      </div>
      </div>
      {/* 반복주기-wrapper 반복설정이랑 반복주기 div하나 */}
      <div className=" flex flex-col  items-center  mt-5">
        {/* 반복설정-text */}
        <div className=" border border-black w-[300px] ">반복설정</div>
        {/* 반복설정 wrapper */}
        <div className=" border border-black w-full h-[100px] flex justify-center items-center">
          <div className=" flex justify-around w-[250px] ">
            {/* 반복설정 체크 -(true or false) */}
            <div className=" w-7 h-7 border border-black flex justify-center items-center ">
              월
            </div>
            <div className=" w-7 h-7 border border-black flex justify-center items-center">
              화
            </div>
            <div className=" w-7 h-7 border border-black flex justify-center items-center">
              수
            </div>
            <div className=" w-7 h-7 border border-black flex justify-center items-center">
              목
            </div>
            <div className=" w-7 h-7 border border-black flex justify-center items-center">
              금
            </div>
            <div className=" w-7 h-7 border border-black flex justify-center items-center">
              토
            </div>
            <div className=" w-7 h-7 border border-black flex justify-center items-center">
              일
            </div>
          </div>
        </div>
      </div>
      {/* 비공개-checkbox */}
      <div className="flex justify-between items-center">
        <span>비공개</span>
        <input type="checkbox" className="ml-9 transform scale-125 w-6 h-6"></input>
      </div>
      {/* 추가하기-div or button */}
      <div>
        <input type="button" value="추가하기" className="bg-gray-300 text-black px-[300px] py-3 rounded-3xl hover:bg-gray-400"/>
      </div>
    </div>
  );
}