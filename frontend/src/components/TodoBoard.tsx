import React from "react";

interface Task {
  _id: string;
  task: string;
  isComplete: boolean;
}

// TodoBoard 컴포넌트의 Props 타입을 정의합니다.
interface TodoBoardProps {
  todoList: Task[];
  deleteItem: (id: string) => void;
  toggleComplete: (id: string) => void;
}

export default function TodoBoard({
  todoList,
  deleteItem,
  toggleComplete,
}: TodoBoardProps) {
  return (
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
  );
}
