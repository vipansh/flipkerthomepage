import React from "react";
// import logo from "../flipkart-plus";

export const Navbar = () => {
  const [search, setSearch] = React.useState();
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex justify-between p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="ml-3 text-xl">Flipkart</span>
        </a>
        <div>
          <nav class="md:ml-auto md:mr-auto inline-flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">My account </a>
            <a class="mr-5 hover:text-gray-900">More </a>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
