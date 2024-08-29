import { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [conPassword, setConPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      if (password !== conPassword) {
        throw new Error("패스워드가 일치하지 않습니다. 다시 입력해주세요.");
      }

      const res = await api.post("/user", {
        name,
        email,
        password,
      });

      if (res.status === 200) {
        navigate("/login");
      } else {
        throw new Error(res.data.error);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="bg-blue-100 w-full min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[550px] flex flex-col justify-between items-center rounded-md px-[20px] py-[40px]"
      >
        <h1 className="text-[28px] font-bold text-blue-500">회원가입</h1>
        <div className="flex-grow w-full flex flex-col gap-[15px]">
          <div className="flex flex-col px-[25px] gap-2">
            <label className="text-[18px] font-semibold">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="border pl-[10px] py-[2px] rounded-md"
            />
          </div>
          <div className="flex flex-col px-[25px] gap-2">
            <label className="text-[18px] font-semibold">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              className="border pl-[10px] py-[2px] rounded-md"
            />
          </div>
          <div className="flex flex-col px-[25px] gap-2">
            <label className="text-[18px] font-semibold">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="border pl-[10px] py-[2px] rounded-md"
            />
          </div>
          <div className="flex flex-col px-[25px] gap-2">
            <label className="text-[18px] font-semibold">
              Confirm new Password
            </label>
            <input
              onChange={(e) => setConPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              className="border pl-[10px] py-[2px] rounded-md"
            />
          </div>
        </div>
        {error && (
          <div className="text-[18px] font-semibold text-red-500 mt-[10px]">
            {error}
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 w-[150px] h-[40px] rounded-lg mt-[40px] text-white font-semibold"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
