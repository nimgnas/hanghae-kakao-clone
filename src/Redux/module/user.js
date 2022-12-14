import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

/**
 * payload = {
 *  username,
 *  nickname,
 *  image,
 *  password,
 *  passwordCheck
 * }
 */

export const __signup = createAsyncThunk(
  "user/signup",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, success, error },
      } = await api.post("signup", payload);
      if (success) return thunkAPI.fulfillWithValue(data);
      else {
        throw new Error(error.message);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

/**
 * payload = {
 *  username,
 *  password
 * }
 */
export const __signin = createAsyncThunk(
  "user/signin",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, success, error },
      } = await api.post("signin", payload);
      if (success) {
        return thunkAPI.fulfillWithValue(data);
      } else throw new Error(error.message);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __getMyProfile = createAsyncThunk(
  "user/getMyProfile",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, success, error },
      } = await api.get("myprofile");

      if (success) {
        return thunkAPI.fulfillWithValue(data);
      } else throw new Error(error.message);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

/**
 * payload = {
 *  nickname,
 *  image,
 *  message
 * }
 */
export const __putMyProfile = createAsyncThunk(
  "user/putMyProfile",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, success, error },
      } = await api.put("myprofile", payload);

      if (success) {
        return thunkAPI.fulfillWithValue(data);
      } else throw new Error(error.message);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const pendingReducer = (state) => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.errorMsg = action.payload;
  state.isLoading = false;
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      nickname: "",
      image: "",
      status: null,
    },
    isLoading: false,
    errorMsg: null,
  },
  reducers: {},
  extraReducers: {
    // ????????????
    [__signup.pending]: pendingReducer,
    [__signup.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [__signup.rejected]: rejectedReducer,

    // ?????????
    [__signup.pending]: pendingReducer,
    [__signup.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [__signup.rejected]: rejectedReducer,

    // ????????? ????????????
    [__getMyProfile.pending]: pendingReducer,
    [__getMyProfile.fulfilled]: (state, action) => {
      state.userInfo = action.payload; // TODO: ????????? ??????????????? ????????????
      state.isLoading = false;
    },
    [__getMyProfile.rejected]: rejectedReducer,

    // ????????? ??????
    [__putMyProfile.pending]: pendingReducer,
    [__putMyProfile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
    },
    [__putMyProfile.rejected]: rejectedReducer,
  },
});
