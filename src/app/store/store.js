import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../../features/product/productSlice";
import userSlice from "@/features/user/userSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    user: userSlice,
  },
});

export default store;
