import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAuth } from "../utils/api";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (username, password) => {
    const request = await loginAuth(username, password);
    const response = await request.data;
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
