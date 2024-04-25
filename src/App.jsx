import React, { useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  addProduct,
  removeProduct,
} from "./features/product/productSlice";
import Layout from "./utils/Layout";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  const { loading, data } = useFetch();
  const storeData = useSelector((state) => state.product.data);
  const dispatch = useDispatch();

  // useEffect(() => {}, []);

  // useEffect(() => {
  //   // console.log(data);
  //   const newProduct = data;
  //   dispatch(getData(newProduct));
  // }, [loading]);

  // useEffect(() => {
  //   console.log(storeData);
  // }, [storeData]);

  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      <Header />
      <Layout />
      <Footer />
    </div>
  );
};

export default App;
