import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getItems: (state, actions) => {
      state.cartItems = actions.payload;
    },
    addItem: (state, actions) => {
      state.cartItems.push(actions.payload);
    },
    removeItem: (state, actions) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== actions.payload
      );
    },
  },
});

export const { getItems, addItem, removeItem } = userSlice.actions;

export default userSlice.reducer;
