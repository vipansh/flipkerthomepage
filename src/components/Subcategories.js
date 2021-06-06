import React from "react";

export const Subcategories = () => {
  const Subcategories_list = [
    "Electronic  TVs & Appliances",
    "Men",
    "Women",
    "Baby&Kids",
    "Home &Furniture",
    "Sports",
    "Books & More",
    "offer zone",
  ];
  return (
    <div className="flex justify-around">
      {Subcategories_list.map((data) => {
        return (
          <div
            key={data}
            className=" border rounded-sm border-gray-200 px-8 cursor-not-allowed"
          >
            {data}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mx-2 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};
