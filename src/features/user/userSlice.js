import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItem: (state, actions) => {
      const newItem = actions.payload;
      const productIdExists = state.cartItems.some(
        (item) => item.productId === newItem.productId
      );
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.productId === newItem.productId
      );
      if (!productIdExists) state.cartItems.push(newItem);
      else
        state.cartItems[existingItemIndex].quantity =
          parseInt(state.cartItems[existingItemIndex].quantity) +
          parseInt(newItem.quantity);
    },

    removeItem: (state, actions) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== actions.payload
      );
    },
  },
});

export const { addItem, removeItem } = userSlice.actions;

export default userSlice.reducer;
