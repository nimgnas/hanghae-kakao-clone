import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChattingTab from "../page/ChattingTab";
import Home from "../page/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chathome" element={<ChattingTab />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
