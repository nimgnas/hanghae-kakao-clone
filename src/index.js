import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Redux/config/configStore";
import App from "./App";

import { GlobalStyles, ResetCss } from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <ResetCss />
    <App />
  </Provider>
);
