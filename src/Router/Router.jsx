import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../page/Login";
import Profile from "../page/Profile";
import ChattingTab from "../page/ChattingTab";
import Home from "../page/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chathome" element={<ChattingTab />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
