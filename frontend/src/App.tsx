import { Route, Routes } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

export default function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const token = await sessionStorage.getItem("token");
    } catch (err) {}
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute user={user}>
            <TodoPage />
          </PrivateRoute>
        }
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

// 1. 로그인을 하면 토큰을 저장함
// 2. 토큰값을 읽어옴
// 3. 토큰이 사용 가능한 토큰인지 확인함 (토큰이 만료되지 않고, 토큰을 해독했을때 유저 ID가있다 ->백엔드)
// 3-2. 토큰이 사용가능하면 토큰을 바탕으로 User 객체를 보내준다.
// 4. 유저가 있다면 Todo Page를 보여준다.

// 로그인을 안했다면 Todo Page로 갈 수 없다.
