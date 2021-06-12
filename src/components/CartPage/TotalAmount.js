import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const TotalAmount = ({ totalFrom }) => {
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [orginaltotal, setOrginaltotal] = useState(0);

  useEffect(() => {
    let dummyTotalWithDiscount = 0;
    let dummyTotalWithOutDiscount = 0;

    for (let i = 0; i < totalFrom.length; i++) {
      dummyTotalWithDiscount =(dummyTotalWithDiscount + (totalFrom[i].original_cost * (totalFrom[i].discount / 100) *totalFrom[i].count ) );
      dummyTotalWithOutDiscount = (dummyTotalWithOutDiscount + totalFrom[i].original_cost*totalFrom[i].count);
    }
    setOrginaltotal(dummyTotalWithOutDiscount);
    setTotal(dummyTotalWithDiscount);
    setDiscount((dummyTotalWithDiscount / dummyTotalWithOutDiscount) * 100);
  }, [totalFrom]);

  return (
    <div className="w-full rounded-lg bg-white">
      <div className="text-4xl w-full">
        <div className="uppercase text-gray-500  font-bold py-4 border-b-2">
          Price Details
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between my-4 ">
            {/* original cost */}
            <div>Price({totalFrom.length} items)</div>
            <div>{Math.floor(orginaltotal)}</div>
          </div>
          {/* discount in % and amount  */}
          <div className="flex justify-between my-4">
            <div>
              Discount <span>({Math.floor(discount)}%)</span>
            </div>
            <div className="text-green-600">
              <span>-{Math.floor(orginaltotal - total)}</span>
            </div>
          </div>
          {/* Total  */}
          <div className="flex justify-between my-4  font-bold">
            {/* original cost */}
            <div>Total</div>
            <div>{Math.floor(total)}</div>
          </div>
          {/* you will save */}
          <div className="flex justify-between items-center my-4  font-bold text-green-700">
            You will save {Math.floor(orginaltotal - total)} in this order 
          </div>
        </div>
      </div>
      <div className="flex justify-between space-x-4 text-3xl">
        <Link
          to="/"
          className="px-6 py-2 border rounded-md dark:border-violet-400"
        >
          Back
          <span className="sr-only sm:not-sr-only"> to shop</span>
        </Link>
        <Link
          to="/"
          className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-coolGray-900"
        >
          <span className="sr-only sm:not-sr-only">Continue to</span> Checkout
        </Link>
      </div>
    </div>
  );
};
