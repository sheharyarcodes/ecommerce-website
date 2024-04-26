import React from "react";
import { Link } from "react-router-dom";
import { Star } from "@/assets/icons";

const Card = ({ item }) => {
  return (
    <Link id={item.id} to={`/product/${item.id}`}>
      <div className="w-[300px] h-[300px] bg-white p-4 rounded overflow-hidden">
        <div className="w-full h-1/2 overflow-hidden  mb-4">
          <img
            className="mx-auto w-20  h-full object-contain"
            src={item.image}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="bg-gray-200 w-fit rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mb-2">
            {item.category.toUpperCase()}
          </span>
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {item.title}
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="flex items-center gap-1 font-semibold text-gray-600">
              <Star className="text-yellow-500" />

              {item.rating.rate}
            </h4>
            <h5 className="font-semibold text-gray-700">
              <span className="text-gray-800">$</span>
              {item.price}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
