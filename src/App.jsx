import React, { useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./features/product/productSlice";
import Layout from "./Layout";
import { Footer, Header, Spinner } from "./components";

const App = () => {
  const { loading, data } = useFetch();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.product.data);

  useEffect(() => {
    // console.log(storeData);
  }, [storeData]);

  useEffect(() => {
    if (data) {
      const newProduct = data;
      dispatch(getData(newProduct));
    }
  }, [data]);

  return !loading ? (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container">
        <Layout />
      </main>
      <Footer />
    </div>
  ) : (
    <Spinner />
  );
};

export default App;
