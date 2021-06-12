import React, { useContext, useState, useEffect } from "react";
import { CartContaxt } from "../../Layout/context/CartContaxtProvider";
import { CartProduct } from "./CartProduct";
import { EmptyCart } from "./EmptyCart";
import { TotalAmount } from "./TotalAmount";

export const ProductList = () => {
  const { cartItem } = useContext(CartContaxt);
  const [loading, setLoading] = useState(true);
  const [orderList, setOrderList] = useState();
  const [saveForLaterList, setSaveForLaterList] = useState();

  useEffect(() => {
    let currentOrder = cartItem.filter((data) => !data.save_for_later);
    setOrderList(currentOrder);

    let saveOrder = cartItem.filter((data) => data.save_for_later);
    setSaveForLaterList(saveOrder);
    setLoading(false);
  }, [cartItem]);

  if (cartItem.length === 0) {
    return <EmptyCart />;
  }

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="flex flex-col  p-6 space-y-4  container mx-auto">
      {orderList.length>0? (
        <div>
          <h2 className="text-xl font-semibold">Your Order</h2>
          <div className="flex justify-between">
            <ul className="flex flex-col w-3/4 ">
              {orderList.map((data) => {
                return <CartProduct key={data.id} product={data} />;
              })}
            </ul>
            <div className="m-4 p-4 flex justify-center items-end">
              <TotalAmount totalFrom={orderList} />
            </div>
          </div>
        </div>
      ):null}

      {saveForLaterList.length>0? (
        <div className={orderList.length?"border-t-2":""}>
          <h2 className="text-xl font-semibold">Save for later</h2>
          <ul className="flex flex-col  w-3/4">
            {saveForLaterList.map((data) => {
              return <CartProduct key={data.id} product={data} />;
            })}
          </ul>
        </div>
      ):null}
    </div>
  );
};
