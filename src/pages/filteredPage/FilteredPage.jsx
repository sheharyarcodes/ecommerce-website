import React from "react";
import useFetch from "@/hooks/useFetch";
import { Card, Spinner } from "@/components";
import { useParams } from "react-router-dom";

const FilteredPage = () => {
  const { category } = useParams();
  const { data } = useFetch(`/products/category/${category}`);

  return (
    <div className="py-10 flex justify-center flex-wrap gap-6">
      {data ? (
        data?.map((item) => <Card key={item.id} item={item} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default FilteredPage;
