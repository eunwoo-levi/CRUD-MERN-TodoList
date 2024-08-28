import { useEffect, useState } from "react";
import "./App.css";
import TodoBoard from "./components/TodoBoard";
import api from "./utils/api";

interface Task {
  _id: string;
  task: string;
  isComplete: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<Task[]>([]);
  const [todoValue, setTodoValue] = useState<string>("");

  const getTasks = async () => {
    const res = await api.get("/tasks");
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
        isComplieted: false,
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
        const response = await api.put(`/tasks/${id}`, {
          isComplete: !task.isComplete,
        });
        if (response.status === 200) {
          getTasks();
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-6">
      <div className="w-[80%] flex flex-row justify-between items-center gap-[20px]">
        <input
          onChange={handleInputChange}
          className="border border-blue-400 w-[1000px] h-[45px] outline-none pl-[20px] rounded-md"
          type="text"
          placeholder="할일을 추가하세요!"
        />
        <button
          onClick={handleAddClick}
          className="bg-blue-300 w-[150px] h-[45px] text-white font-bold rounded-md"
        >
          추가
        </button>
      </div>
      <div className="w-full flex flex-col gap-[5px]">
        <h1 className="text-center text-[35px] font-semibold text-blue-500 mb-[20px]">
          Todo List
        </h1>
        <TodoBoard
          todoList={todoList}
          deleteItem={deleteItem}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;
