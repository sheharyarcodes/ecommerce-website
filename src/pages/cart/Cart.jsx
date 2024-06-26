import React from "react";
import { Button } from "@/components/ui/button";
import { removeItem } from "@/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Cart = () => {
  const userCart = useSelector((state) => state.user.cartItems);
  const dispatch = useDispatch();

  const notify = () =>
    toast.success("Thanks for purchasing!", {
      position: "bottom-right",
      pauseOnHover: false,
    });

  return (
    <div className="flex flex-col gap-4 items-center py-10">
      {userCart.length > 0 ? (
        userCart?.map((item) => (
          <div
            key={item.productId}
            className="bg-white w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-lg shadow-md overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 p-4">
              <div className="h-32 w-32 sm:h-24 sm:w-24 overflow-hidden rounded-lg">
                <img
                  className="object-contain w-full h-full"
                  src={item.productImg}
                  alt=""
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <h2 className="text-lg font-semibold">{item.productTitle}</h2>
                <div className="flex flex-wrap gap-2 justify-between items-center mt-2">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      className="bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300"
                      variant="outline"
                      onClick={() => {
                        dispatch(removeItem(item.productId));
                        notify();
                      }}
                    >
                      Buy Now
                    </Button>
                    <Button
                      size="sm"
                      className="font-semibold"
                      variant="destructive"
                      onClick={() => dispatch(removeItem(item.productId))}
                    >
                      Delete
                    </Button>
                  </div>
                  <p className="text-gray-600 font-semibold">
                    Quantity:{" "}
                    <span className="font-normal">{item.quantity}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Add items to cart first</p>
      )}
    </div>
  );
};

export default Cart;
