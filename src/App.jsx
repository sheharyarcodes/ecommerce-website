import React, { useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { pushData } from "./features/product/productSlice";
import Layout from "./Layout";
import { Footer, Header, Spinner } from "./components";

const App = () => {
  const { loading, data } = useFetch("/products");
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      const newProduct = data;
      dispatch(pushData(newProduct));
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
