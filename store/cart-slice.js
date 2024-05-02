import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.productId === id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          productId: id,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.productId === id);
      state.changed = true;
      if (!existingItem) {
        return;
      }
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.productId !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
      }
    },
    deleteItemFromCart(state, action) {
      const id = action.payload;
      state.changed = true;
      state.items = state.items.filter((item) => item.productId !== id);
      state.totalQuantity--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
