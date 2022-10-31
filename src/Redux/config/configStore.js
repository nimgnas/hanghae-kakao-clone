import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { friendSlice } from "../module/friend";
import { userSlice } from "../module/user";

export default configureStore({
  reducer: {
    userReducer: userSlice.reducer,
    friendReducer: friendSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
