import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

export const __getRooms = createAsyncThunk(
  "chat/getRooms",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, success, error },
      } = await api.get("rooms");
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
 *  title,
 *  username
 * }
 */
export const __createRoom = createAsyncThunk(
  "chat/createRoom",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, success, error },
      } = await api.post("rooms", payload);
      if (success) {
        return thunkAPI.fulfillWithValue(data); // payload값 그대로 전달할것
      } else throw new Error(error.message);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// payload = roomid
export const __deleteRoom = createAsyncThunk(
  "chat/deleteRoom",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data, success, error },
      } = await api.delete(`rooms/${payload}`);
      if (success) {
        return thunkAPI.fulfillWithValue(payload); // payload값 그대로 전달
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

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    rooms: [],
    isLoading: false,
    errorMsg: null,
  },
  reducers: {},
  extraReducers: {
    // 채팅방 목록 조회
    [__getRooms.pending]: pendingReducer,
    [__getRooms.fulfilled]: (state, action) => {
      state.rooms = action.payload;
      state.isLoading = false;
    },
    [__getRooms.rejected]: rejectedReducer,

    // 채팅방 생성
    [__createRoom.pending]: pendingReducer,
    [__createRoom.fulfilled]: (state, action) => {
      state.rooms.push(action.payload);
      state.isLoading = false;
    },
    [__createRoom.rejected]: rejectedReducer,

    // 채팅방 나가기
    [__deleteRoom.pending]: pendingReducer,
    [__deleteRoom.fulfilled]: (state, action) => {
      // TODO: 삭제 로직 작성
      state.isLoading = false;
    },
    [__deleteRoom.rejected]: rejectedReducer,
  },
});
