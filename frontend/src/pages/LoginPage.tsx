import { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await api.post("/user/login", {
        email,
        password,
      });

      if (res.status === 200) {
        setUser(res.data.user);
        sessionStorage.setItem("token", res.data.token);
        api.defaults.headers["authorization"] = "bearer " + res.data.token;

        setError("");
        navigate("/");
      } else {
        throw new Error(res.data.message);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-blue-100 w-full min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="bg-white w-[550px] flex flex-col justify-between items-center rounded-md px-[20px] py-[40px]"
      >
        <h1 className="text-[35px] font-bold text-blue-500">로그인</h1>
        <div className="flex-grow w-full flex flex-col gap-[30px] mt-[30px]">
          <div className="flex flex-col px-[25px] gap-2">
            <label className="text-[20px] font-semibold">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              className="border pl-[10px] py-[3px] rounded-md"
            />
          </div>
          <div className="flex flex-col px-[25px] gap-2">
            <label className="text-[20px] font-semibold">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="border pl-[10px] py-[3px] rounded-md"
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
          로그인
        </button>
      </form>
    </div>
  );
}
