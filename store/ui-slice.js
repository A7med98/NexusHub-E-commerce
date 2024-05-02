import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { fetchCart: false, notification: "" },
  reducers: {
    toggle(state) {
      state.fetchCart = !state.fetchCart;
    },
    showNotification(state, action) {
      state.notification = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
