import { useEffect, useState } from "react";
import TodoBoard from "../components/TodoBoard";
import api from "../utils/api";

interface Task {
  _id: string;
  task: string;
  isCompleted: boolean;
  author: {
    name: string;
  };
}

export default function TodoPage() {
  const [todoList, setTodoList] = useState<Task[]>([]);
  const [todoValue, setTodoValue] = useState<string>("");

  const getTasks = async () => {
    const res = await api.get("/tasks");
    console.log("테스크리스트!!!!!!!!: ", res.data.data);
    setTodoList(res.data.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const handleAddClick = async () => {
    try {
      const res = await api.post("/tasks", {
        task: todoValue,
        isCompleted: false,
      });

      if (res.status === 200) {
        getTasks();
      }
      setTodoValue("");
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      console.log(id);
      const response = await api.delete(`/tasks/${id}`);
      if (response.status === 200) {
        getTasks();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const toggleComplete = async (id: string) => {
    try {
      const task = todoList.find((item) => item._id === id);
      if (task) {
        const res = await api.put(`/tasks/${id}`, {
          isCompleted: !task.isCompleted,
        });
        if (res.status === 200) {
          getTasks();
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="bg-blue-100 w-full min-h-screen flex flex-col justify-center items-center gap-6">
      <div className="w-[80%] flex flex-row justify-between items-center gap-[20px]">
        <input
          onChange={handleInputChange}
          className="border border-blue-400 w-[1000px] h-[45px] outline-none pl-[20px] rounded-md"
          type="text"
          placeholder="할일을 추가하세요!"
        />
        <button
          onClick={handleAddClick}
          className="bg-blue-300 w-[150px] h-[45px] text-white font-bold rounded-md hover:bg-blue-500"
        >
          추가
        </button>
      </div>

      <TodoBoard
        todoList={todoList}
        deleteItem={deleteItem}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}
