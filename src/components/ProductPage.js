import React, { useState, useEffect } from "react";
import { ProductDisplay } from "./ProductDisplay";

export const ProductPage = ({ data }) => {
  const [sortedList, setSortedList] = useState([]);
  const [sortingBy, setSortingBy] = useState(0);

  function sortbyPrice(sortBy) {
    let tempArr = [...data];
    if (sortBy === "asc") {
      tempArr.sort((a, b) => a.original_cost - b.original_cost);
    }
    if (sortBy === "dec") {
      tempArr.sort((a, b) => b.original_cost - a.original_cost);
    }
    setSortedList(tempArr);
  }

  useEffect(() => {
    // sortbyPrice();
    setSortedList(data);
  }, [data]);

  return (
    <div>
      <div>Clothing And Accessories</div>
      <div className="flex my-2 p-4">
        <div
          className={`${
            sortingBy === 0 ? "text-blue-500 border-blue-500" : ""
          } + " cursor-pointer py-2 px-4 text-gray-500 border-b-8 +"`}
          onClick={() => {
            sortbyPrice("popularity");
            setSortingBy(0);
          }}
        >
          Popularity
        </div>
        <div
          className={`${
            sortingBy === 1 ? "text-blue-500 border-blue-500" : ""
          } + " cursor-pointer py-2 px-4 text-gray-500 border-b-8 +"`}
          onClick={() => {
            sortbyPrice("asc");
            setSortingBy(1);
          }}
        >
          Price -- Low to High
        </div>
        <div
          className={`${
            sortingBy === 2 ? "text-blue-500 border-blue-500" : ""
          } + " cursor-pointer py-2 px-4 text-gray-500 border-b-8 +"`}
          onClick={() => {
            sortbyPrice("dec");
            setSortingBy(2);
          }}
        >
          Price -- High to Low
        </div>
      </div>
      <div className="flex flex-wrap   my-4">
        {sortedList.length !== 0 ? (
          sortedList.map((data) => {
            return <ProductDisplay data={data} key={data.id} />;
          })
        ) : (
          <div>Empty list</div>
        )}
      </div>
    </div>
  );
};
