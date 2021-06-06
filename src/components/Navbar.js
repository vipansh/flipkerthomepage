import React from "react";
// import logo from "../flipkart-plus";

export const Navbar = () => {
  const [search, setSearch] = React.useState();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex justify-between p-5 flex-col md:flex-row items-center">
        <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Flipkart</span>
        </span>
        <div>
          <nav className="md:ml-auto md:mr-auto inline-flex flex-wrap items-center text-base justify-center">
            <span className="mr-5 hover:text-gray-900">My account </span>
            <span className="mr-5 hover:text-gray-900">More </span>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
