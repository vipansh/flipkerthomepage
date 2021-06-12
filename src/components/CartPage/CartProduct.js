import React, { useContext } from "react";
import { CartContaxt } from "../../Layout/context/CartContaxtProvider";
import assured from "../../fa.png";
import { AddBtn } from "../AddToCart/AddBtn";

export const CartProduct = ({ product }) => {
  const { cartItem, setCartItem } = useContext(CartContaxt);
  function saveForLater() {
    const updatedcart = [...cartItem];
    const items = { ...product };
    let currentFoundProduct = updatedcart.find((data) => items.id === data.id);
    if (currentFoundProduct) {
      // If found update save for later
      currentFoundProduct.save_for_later = true;
      // update localStorage cart ...
      localStorage.setItem("CartItem", JSON.stringify(updatedcart));
      setCartItem(updatedcart);
    }
  }

  function movetoOrder() {
    const updatedcart = [...cartItem];
    const items = { ...product };
    let currentFoundProduct = updatedcart.find((data) => items.id === data.id);
    if (currentFoundProduct) {
      // If found update save for later
      currentFoundProduct.save_for_later = false;
      // update localStorage cart ...
      localStorage.setItem("CartItem", JSON.stringify(updatedcart));
      setCartItem(updatedcart);
    }
  }

  function removeFromCart() {
    let updatedcart = [...cartItem];
    const items = { ...product };
    updatedcart = updatedcart.filter((data) => items.id !== data.id);
    // update localStorage cart ...
    localStorage.setItem("CartItem", JSON.stringify(updatedcart));
    setCartItem(updatedcart);
  }

  return (
    <li className="flex flex-col py-6 sm:flex-row  container mx-auto">
      <div className="w-1/2 flex justify-start ">
        <img
          src={product.image}
          style={{ height: "25rem", minWidth: "25rem" }}
          className="p-4 mx-4"
          alt={product.name}
        />
        <div className="text-2xl">
          <p className="my-2">{product.made_by}</p>
          <p className="my-2">
            {product.name}
            {product.is_assured && (
              <span>
                <img className="h-4 mx-4 block" src={assured} alt="assured" />
              </span>
            )}
          </p>
          <p className="my-4">
            <strike>{product.original_cost}</strike>
            <span className="mx-4">{product.discount}% Discount</span>
          </p>
          <p className="my-4">
            ₹{Math.floor((product.original_cost / 100) * product.discount)}
          </p>
          <AddBtn product={product} />
          <div className="flex divide-x h-4 my-4">
            <button
              className="flex items-center p-4 my-4 space-x-1 hover:text-red-600"
              onClick={removeFromCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                <rect width="32" height="200" x="168" y="216"></rect>
                <rect width="32" height="200" x="240" y="216"></rect>
                <rect width="32" height="200" x="312" y="216"></rect>
                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
              </svg>
              <span>Remove</span>
            </button>
            {product.save_for_later ? (
              <button
                className="flex items-center  p-4 my-4 space-x-1 hover:text-blue-600"
                onClick={movetoOrder}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block hover:text-red-600" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
</svg>
                <span>Order Now</span>
              </button>
            ) : (
              <button
                className="flex items-center  p-4 my-4 space-x-1 hover:text-green-800"
                onClick={saveForLater}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                </svg>
                <span>Save For later</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
