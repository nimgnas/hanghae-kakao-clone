import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles, ResetCss } from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <ResetCss />
    <App />
  </>
);
