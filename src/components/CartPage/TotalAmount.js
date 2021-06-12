import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

export const TotalAmount = ({totalFrom}) => {

const [total, setTotal] = useState(0)
const [discount, setDiscount] = useState(0)
const [orginaltotal, setOrginaltotal] = useState(0)

useEffect(() => {
 
let dummyTotalWithDiscount= 0
let  dummyTotalWithOutDiscount=0

for(let i=0;i<totalFrom.length;i++){
  dummyTotalWithDiscount = dummyTotalWithDiscount + (totalFrom[i].original_cost*(totalFrom[i].discount/100))
  dummyTotalWithOutDiscount = dummyTotalWithOutDiscount + totalFrom[i].original_cost
}
setOrginaltotal(dummyTotalWithOutDiscount)
setTotal(dummyTotalWithDiscount)
setDiscount((dummyTotalWithDiscount/dummyTotalWithOutDiscount) * 100)
}, [totalFrom])

  return (
    <div>
      <div className="space-y-1 text-right text-3xl">
        <p>
          Total amount:
           <span className="font-semibold mx-4 "><strike>  {Math.floor(orginaltotal)}</strike> </span>     <span className="font-semibold">{Math.floor(total)}</span>
        </p>
        <p>
          Total Discount:

          <span className="font-semibold">{Math.floor(discount)} %</span>
        </p>
        <p className="text-sm dark:text-coolGray-400">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-end space-x-4 text-3xl">
        <Link to="/" className="px-6 py-2 border rounded-md dark:border-violet-400">
          Back
          <span className="sr-only sm:not-sr-only"> to shop</span>
        </Link>
        <Link  to="/" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-coolGray-900">
          <span className="sr-only sm:not-sr-only">Continue to</span> Checkout
        </Link>
      </div>
    </div>
  );
};
