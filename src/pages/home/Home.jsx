import { Card, Spinner } from "@/components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const storeData = useSelector((state) => state.product.data);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (storeData.length) setProducts(storeData);
  }, [storeData]);

  return (
    <div className="py-10 flex justify-center flex-wrap gap-6">
      {products ? (
        products?.map((item) => <Card key={item.id} item={item} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Home;
