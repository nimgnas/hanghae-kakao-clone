import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

/**
 * payload =  username
 */
export const __addFriend = createAsyncThunk(
  "friend/addFriend",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, success, error },
      } = await api.post("friends", payload);

      if (success) {
        return thunkAPI.fulfillWithValue(data);
      } else throw new Error(error.message);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __getFriendList = createAsyncThunk(
  "friend/getFriendList",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, success, error },
      } = await api.get("friends");

      if (success) {
        return thunkAPI.fulfillWithValue(data);
      } else throw new Error(error.message);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

/**
 * payload = friendId
 */
export const __getFriendProfileById = createAsyncThunk(
  "friend/getFriendProfile",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, success, error },
      } = await api.get(`friends/${payload}`);

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

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    friendList: [],
    friendProfile: {},
    isLoading: false,
    successMsg: "",
    errorMsg: null,
  },
  reducers: {},
  extraReducers: {
    // 친구 추가
    [__addFriend.pending]: pendingReducer,
    [__addFriend.fulfilled]: (state, action) => {
      // TODO: 친구추가시 바로 반영 어떻게할까? 백엔드에서 유저정보도 같이 전송부탁 or 프론트 어딘가에서 가져온다
      state.successMsg = action.payload;
      state.isLoading = false;
    },
    [__addFriend.rejected]: rejectedReducer,

    // 친구목록 조회
    [__addFriend.pending]: pendingReducer,
    [__addFriend.fulfilled]: (state, action) => {
      state.friendList = action.payload.friendList;
      state.isLoading = false;
    },
    [__addFriend.rejected]: rejectedReducer,

    // 친구 프로필 조회
    [__getFriendProfileById.pending]: pendingReducer,
    [__getFriendProfileById.fulfilled]: (state, action) => {
      state.friendProfile = action.payload;
      state.isLoading = false;
    },
    [__getFriendProfileById.rejected]: rejectedReducer,
  },
});
