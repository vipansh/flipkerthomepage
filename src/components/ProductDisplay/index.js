import React from "react";
import assured from "../../fa.png";
export const ProductDisplay = ({ data }) => {
  // is_assured: true,
  // id: 1002,
  // discount: 76,
  // original_cost: 999,
  // image:
  //   "https://rukminim1.flixcart.com/image/367/440/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50",
  // name: "Striped Men Hooded Neck Red, Black T-Shirt",
  // made_by: "HELMONT",
  // is_for: "Men",
  // catogeries: "Clothing And Accessories",
  // size: ["S", "M", "L"],
  // minor_details: null,
  // extra_offers: null,

  return (
    <div className="w-62 px-8 rounded-sm" style={{ height: "33rem" }}>
      <img src={data.image} style={{ height: "25rem" }} alt={data.name} />
      <div>
        <p>{data.made_by}</p>
        <p>
          {data.name.slice(0, 12)}...{" "}
          {data.is_assured && (
            <span>
              <img className="h-4 inline-block" src={assured} />
            </span>
          )}
        </p>
        <p>
          <strike>{data.original_cost}</strike>
          <span className="mx-4">{data.discount}% Discount</span>
        </p>
        <p>₹{Math.floor((data.original_cost / 100) * data.discount)}</p>
      </div>
    </div>
  );
};
