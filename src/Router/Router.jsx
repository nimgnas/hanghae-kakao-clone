import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Chatting from "../page/Chatting";
import Login from "../page/Login";
import Profile from "../page/Profile";
import ChattingTab from "../page/ChattingTab";
import Home from "../page/Home";
import Register from "../page/Register";
import AddFriend from "../page/AddFriend";
import { useEffect } from "react";

function Router() {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  /**
   * if 토큰이 존재하지 않고, 현재 주소가 login 또는 register가 아닐경우 "/login" 페이지로 이동한다.
   * if 토큰이 존재하고, 현재 주소가 login 또는 register일 경우 "/" 페이지로 이동한다
   */
  useEffect(() => {
    const isTokenPath = ["/login", "/register"];
    if (!token && !isTokenPath.includes(pathname)) navigate("/login");
    if (token && isTokenPath.includes(pathname)) navigate("/");
  }, [navigate, token, pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chathome" element={<ChattingTab />} />
      <Route path="/chathome/:id" element={<Chatting />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/addfriend" element={<AddFriend />} />
    </Routes>
  );
}

export default Router;
