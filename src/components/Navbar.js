import React from "react";
import { Cart } from "./AddToCart/Cart";
// import logo from "../flipkart-plus";
import {Link} from "react-router-dom";
export const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex justify-between p-5 flex-col md:flex-row items-center">
        <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link to ="/" className="ml-3 text-xl">Flipkart</Link>
        </span>
        <div>
          <nav className="md:ml-auto md:mr-auto inline-flex flex-wrap items-center text-base justify-center">
            <span className="mr-5 hover:text-gray-900">My account </span>
            <span className="mr-5 hover:text-gray-900">More </span>
          </nav>
          <Link className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" to="/cart">
            <Cart/>
          </Link>
        </div>
      </div>
    </header>
  );
};
