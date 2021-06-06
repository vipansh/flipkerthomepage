import React from "react";

export const Filters = ({
  filterByIdealFor,
  setfilterByIdealFor,
  filterByBrand,
  setfilterByBrand,
  filterBySize,
  setfilterBySize,
}) => {
  const Ideal_for_list = ["Men", "Women", "Kids"];
  const Size_list = ["M", "L", "XL", "XXL"];
  const Brand_list = [
    "United Colors of Benetton",
    "HELMONT",
    "Sixteen Creation",
    "New gen",
    "Bold Born",
  ];

  return (
    <div className=" mx-4">
      <div>
        <div className="flex justify-between">
          <div className="text-gray-600 font-bold md:text-2xl text-xl">
            Filters
          </div>
          <div
            className="flex text-blue-600 cursor-pointer hover:underline"
            onClick={() => {
              setfilterBySize();
              setfilterByBrand();
              setfilterByIdealFor();
            }}
          >
            Clear All
          </div>
        </div>
        <div className="flex cursor-pointer">
          {filterByIdealFor && (
            <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2 mx-2">
              {filterByIdealFor}
              <span
                className="p-2"
                onClick={() => {
                  setfilterByIdealFor();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-flex"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          )}
          {filterByBrand && (
            <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2 mx-2">
              {filterByBrand}{" "}
              <span
                className="p-2"
                onClick={() => {
                  setfilterByBrand();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-flex"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          )}
          {filterBySize && (
            <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2 mx-2">
              {filterBySize}
              <span
                className="p-2"
                onClick={() => {
                  setfilterBySize();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-flex"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>

      <div>
        <div className=" my-4 w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md  focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
          <div>IDEAL FOR</div>
          {Ideal_for_list.map((data) => {
            return (
              <div
                className=" my-2 inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 cursor-pointer"
                key={data}
                onClick={() => {
                  setfilterByIdealFor(data);
                }}
              >
                {data}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className=" my-4 w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md  focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 cursor-pointer">
          <div>Size</div>
          {Size_list.map((data) => {
            return (
              <div
                className="my-2 inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 cursor-pointer"
                key={data}
                onClick={() => {
                  setfilterBySize(data);
                }}
              >
                {data}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="my-4 w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md  focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
          <div>Brand</div>
          {Brand_list.map((data) => {
            return (
              <div
                className=" my-2 inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 cursor-pointer"
                key={data}
                onClick={() => {
                  setfilterByBrand(data);
                }}
              >
                {data}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
