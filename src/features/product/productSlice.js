import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    pushData: (state, actions) => {
      state.data = actions.payload;
    },
    addProduct: (state, actions) => {
      state.data.push(actions.payload);
    },
    removeProduct: (state, actions) => {
      state.data = state.data.filter((item) => item.id !== actions.payload);
    },
  },
});

export const { pushData, addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
