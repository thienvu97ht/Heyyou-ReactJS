import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import StorageKeys from "constants/storage-keys";

export const register = createAsyncThunk("user/register", async (payload) => {
  const data = await userApi.register(payload);

  // Save data to local storage
  //   localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  //   localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data;
});

export const login = createAsyncThunk("user/login", async (payload) => {
  const data = await userApi.checkLogin(payload);

  console.log(data);

  // Save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.access_token);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    setting: {},
  },
  reducers: {
    logout(state, action) {
      // clear local storage
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);

      state.current = {};
    },
  },
  extraReducers: {
    // [register.fulfilled]: (state, action) => {
    //   state.current = action.payload;
    // },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;