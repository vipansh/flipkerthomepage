  
import React, { useContext } from 'react'
import { CartContaxt } from '../../Layout/context/CartContaxtProvider'

export const Cart = () => {
    const { cartItem } = useContext(CartContaxt)

    return (
      <div className=" relative">
        <div className="p-2">
            <span className={`absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4  p-0 m-0 text-white font-mono text-sm  leading-tight text-center ${cartItem.length === 0 ? "hidden" : ""}`} >{cartItem ? cartItem.length : null}</span>
            <div className="detail-badge">Bag 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            </div>
        </div >
      </div>
    )
}