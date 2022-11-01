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
    console.log(payload);
    try {
      const {
        data: { data, success, error },
      } = await api.get(`friends/1`);
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

export const friendSlice = createSlice({
  name: "friend",
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
      state.friendList.push(action.payload);
      state.isLoading = false;
    },
    [__addFriend.rejected]: rejectedReducer,

    // 친구목록 조회
    [__getFriendList.pending]: pendingReducer,
    [__getFriendList.fulfilled]: (state, action) => {
      state.friendList = action.payload;
      state.isLoading = false;
    },
    [__getFriendList.rejected]: rejectedReducer,

    // 친구 프로필 조회
    [__getFriendProfileById.pending]: pendingReducer,
    [__getFriendProfileById.fulfilled]: (state, action) => {
      state.friendProfile = action.payload;
      state.isLoading = false;
    },
    [__getFriendProfileById.rejected]: rejectedReducer,
  },
});
