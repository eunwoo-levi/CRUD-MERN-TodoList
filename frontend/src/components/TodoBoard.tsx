import TodoItem from "./TodoItem";

interface Task {
  _id: string;
  task: string;
  isCompleted: boolean;
}

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
    <div className="w-full flex flex-col gap-[5px]">
      <h1 className="text-center text-[35px] font-semibold text-blue-500 mb-[20px]">
        Todo List
      </h1>
      {todoList.length > 0
        ? todoList.map((item, index) => (
            <TodoItem
              item={item}
              key={index}
              deleteItem={deleteItem}
              toggleComplete={toggleComplete}
            />
          ))
        : "There is no To-do List."}
    </div>
  );
}
