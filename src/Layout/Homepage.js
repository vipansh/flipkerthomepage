import React from "react";
import { useState, useEffect } from "react";
import { Filters } from "../components/Filters";
import { Navbar } from "../components/Navbar";
import { ProductPage } from "../components/ProductPage";
import { Subcategories } from "../components/Subcategories";
const data = require('../data.json');
export const Homepage = () => {
  const [productList, setProductList] = useState();
  const [filterByIdealFor, setfilterByIdealFor] = useState();
  const [filterByBrand, setfilterByBrand] = useState();
  const [filterBySize, setfilterBySize] = useState();
  //   "is_assured": false,
  //   "id": 1003,
  //   "discount": 80,
  //   "original_cost": 1999,
  //   "image": "https://rukminim1.flixcart.com/image/459/551/k1nw9zk0/lehenga-choli/m/9/f/free-trilok-pink-lehenga-01-ashtavinayak-original-imafhe5dezzvhua3.jpeg?q=50",
  //   "name": "Satin Embroidered, Embellished Gown/Anarkali Kurta & Bottom Material  (Semi Stitched)",
  //   "made_by": "Sixteen Creation ",
  //   "is_for": ["women"],
  //   "catogeries": "Clothing And Accessories",
  //   "size": [],
  //   "minor_details":null,
  //   "extra_offers" : null

  useEffect(() => {
    let tempData = [...data];
    // filter the array based on ideal
    if (filterByIdealFor) {
      tempData = tempData.filter((a) => {
        if (a.is_for.includes(filterByIdealFor)) {
          console.log(a);
          return a;
        }
      });
    }
    // filter the array based on brand
    if (filterByBrand) {
      tempData = tempData.filter((a) => {
        if (a.made_by === filterByBrand) {
          return a;
        }
      });
    }
    // filter the array base on size
    if (filterBySize) {
      tempData = tempData.filter((a) => {
        if (a.size.includes(filterBySize)) {
          return a;
        }
      });
    }
    setProductList(tempData);
  }, [filterByIdealFor, filterByBrand, filterBySize]);

  console.log(productList);
  return (
    <div>
      <Navbar />
      <Subcategories />
      <div className="flex my-4">
        <div className="max-w-sm  rounded-sm border-gray-200 border ">
          <Filters
            filterByIdealFor={filterByIdealFor}
            setfilterByIdealFor={setfilterByIdealFor}
            filterByBrand={filterByBrand}
            setfilterByBrand={setfilterByBrand}
            filterBySize={filterBySize}
            setfilterBySize={setfilterBySize}
          />
        </div>
        <div className=" rounded-sm border-gray-200 border w-full ">
          {productList && <ProductPage data={productList} />}
        </div>
      </div>
    </div>
  );
};
