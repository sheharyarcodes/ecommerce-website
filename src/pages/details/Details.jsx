import { Star } from "@/assets/icons";
import { Card, Spinner } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useFetch from "@/hooks/useFetch";
import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const { data } = useFetch(`/${id}`);

  return data ? (
    <div className="min-h-[calc(100vh-36vh)] flex flex-col lg:flex-row p-10 gap-8 bg-white my-10 lg:mx-40 rounded">
      <div className="w-full max-w-80 lg:w-1/2 m-auto lg:h-80 overflow-hidden">
        <img className="h-full object-contain" src={data.image} alt="" />
      </div>
      <div className="flex flex-col gap-4 my-auto w-full lg:w-1/2">
        <h2 className="text-lg font-semibold text-gray-800">{data.title}</h2>
        <span className="bg-gray-200 w-fit rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mb-2">
          {data.category.toUpperCase()}
        </span>
        <h3>{data.description}</h3>
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <h4 className="flex flex-wrap items-center gap-1 font-semibold text-gray-600">
            <span className="font-bold text-gray-800">Rating: </span>
            <Star className="text-yellow-500" />
            {data.rating.rate}{" "}
            <span className="font-light">({data.rating.count})</span>
          </h4>
          <h5 className="font-semibold text-gray-700">
            <span className="font-bold text-gray-800">Price: </span>$
            {data.price}
          </h5>
        </div>

        {/* todo: add to cart functionality & use Input component instead of shadcn-ui's one */}
        <div className="flex gap-4">
          <Input className="w-20" type="number" min="1" default="1" max="10" />
          <Button className="flex-1 hover:bg-green-400 active:bg-green-600">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default Details;
