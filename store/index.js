import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
export const wrapper = createWrapper(store);
