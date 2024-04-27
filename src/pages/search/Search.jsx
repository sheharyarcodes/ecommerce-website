import { Card, Spinner } from "@/components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Search = () => {
  const { query } = useParams();
  const storeData = useSelector((state) => state.product.data);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = storeData.filter((item) => {
      const titleWords = item.title.toLowerCase().split(" ");
      const categoryWords = item.category.toLowerCase().split(`'`);
      const queryWords = query.toLowerCase().split(" ");

      return (
        item.title &&
        item.category &&
        (queryWords.every((word) => titleWords.includes(word)) ||
          queryWords.every((word) => categoryWords.includes(word)))
      );
    });

    if (storeData.length) setProducts(filteredProducts);
  }, [query]);

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

export default Search;
