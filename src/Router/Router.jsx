import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chatting from "../page/Chatting";
import Login from "../page/Login";
import Profile from "../page/Profile";

import ChattingTab from "../page/ChattingTab";
import Home from "../page/Home";
import Register from "../page/Register";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chathome" element={<ChattingTab />} />
        <Route path="/chathome/:id" element={<Chatting />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
