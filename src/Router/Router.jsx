import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chatting from "../page/Chatting";
import ChattingTab from "../page/ChattingTab";
import Home from "../page/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chathome" element={<ChattingTab />} />
        <Route path="/chathome/:id" element={<Chatting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
