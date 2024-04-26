import { Card, Spinner } from "@/components";
import useFetch from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const FilteredPage = () => {
  const { category } = useParams();
  const { loading, data, error } = useFetch(`/category/${category}`);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="py-10 flex flex-wrap gap-6">
      {data ? (
        data?.map((item) => <Card key={item.id} item={item} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default FilteredPage;
