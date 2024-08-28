import "./App.css";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-6">
      <div className="w-[80%] flex flex-row justify-between items-center gap-[20px]">
        <input
          className="border border-blue-400 w-[1000px] h-[45px] outline-none pl-[20px] rounded-md"
          type="text"
          placeholder="할일을 추가하세요!"
        />
        <button className="bg-blue-300 w-[150px] h-[45px] text-white font-bold rounded-md">
          추가
        </button>
      </div>
      <div className="w-full flex flex-col gap-[5px]">
        <h1 className="text-center text-[35px] font-semibold text-blue-500 mb-[20px]">
          Todo List
        </h1>
        <div className="w-[80%] mx-auto flex flex-row justify-between items-center px-[20px] border border-blue-500 h-[50px]">
          <div className="font-bold text-blue-400 text-[20px]">내용</div>
          <div className="flex flex-row gap-[10px]">
            <button className="border border-blue-400 text-blue-300 font-semibold w-[55px] h-[30px]">
              삭제
            </button>
            <button className="border border-blue-400 text-blue-300 font-semibold w-[55px] h-[30px]">
              체크
            </button>
          </div>
        </div>
        <div className="w-[80%] mx-auto flex flex-row justify-between items-center px-[20px] border border-blue-500 h-[50px]">
          <div className="font-bold text-blue-400 text-[20px]">내용</div>
          <div className="flex flex-row gap-[10px]">
            <button className="border border-blue-400 text-blue-300 font-semibold w-[55px] h-[30px]">
              삭제
            </button>
            <button className="border border-blue-400 text-blue-300 font-semibold w-[55px] h-[30px]">
              체크
            </button>
          </div>
        </div>
        <div className="w-[80%] mx-auto flex flex-row justify-between items-center px-[20px] border border-blue-500 h-[50px]">
          <div className="font-bold text-blue-400 text-[20px]">내용</div>
          <div className="flex flex-row gap-[10px]">
            <button className="border border-blue-400 text-blue-300 font-semibold w-[55px] h-[30px]">
              삭제
            </button>
            <button className="border border-blue-400 text-blue-300 font-semibold w-[55px] h-[30px]">
              체크
            </button>
          </div>
        </div>
        <div className="w-[80%] mx-auto flex flex-row justify-between items-center px-[20px] border border-blue-500 h-[50px]">
          <div className="font-bold text-blue-400 text-[20px]">내용</div>
          <div className="flex flex-row gap-[10px]">
            <button className="border border-blue-400 text-blue-300 font-semibold w-[55px] h-[30px]">
              삭제
            </button>
            <button className="border border-blue-400 text-blue-300 font-semibold w-[55px] h-[30px]">
              체크
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
