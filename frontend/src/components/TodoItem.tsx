interface Task {
  _id: string;
  task: string;
  isCompleted: boolean;
}

interface TodoItemProps {
  item: Task;
  deleteItem: (id: string) => void;
  toggleComplete: (id: string) => void;
}

export default function TodoItem({
  item,
  deleteItem,
  toggleComplete,
}: TodoItemProps) {
  return (
    <div className="w-[80%] mx-auto flex flex-row justify-between items-center px-[20px] border border-blue-500 h-[50px]">
      <div
        className={`font-bold text-[20px] ${
          item.isCompleted ? "text-gray-400 line-through" : "text-blue-400"
        }`}
      >
        {item.task}
      </div>
      <div className="flex flex-row gap-[10px]">
        <button
          onClick={() => deleteItem(item._id)}
          className="border border-blue-400 text-blue-500 font-semibold w-[55px] h-[30px] hover:bg-red-400"
        >
          삭제
        </button>
        <button
          onClick={() => toggleComplete(item._id)}
          className="border border-blue-400 text-blue-500 font-semibold w-[55px] h-[30px] hover:bg-green-400"
        >
          {item.isCompleted ? "완료" : "진행중"}
        </button>
      </div>
    </div>
  );
}
