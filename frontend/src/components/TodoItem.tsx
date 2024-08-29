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
          onChange={() => deleteItem(item._id)}
          className="border border-blue-400 text-blue-300 font-semibold w-[55px] h-[30px]"
        >
          삭제
        </button>
        <button
          onChange={() => toggleComplete(item._id)}
          className="border border-blue-400 text-blue-300 font-semibold w-[55px] h-[30px]"
        >
          {item.isCompleted ? "완료" : "진행중"}
        </button>
      </div>
    </div>
  );
}
