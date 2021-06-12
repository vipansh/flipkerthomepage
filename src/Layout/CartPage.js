import React from 'react'
import { Link } from 'react-router-dom'
import { ProductList } from '../components/CartPage/ProductList'

export const CartPage = () => {
  return (
    <div>
     <div className="container mx-auto curser-pointer"> <Link to="/">⬅ Back to home</Link></div>
      <ProductList/>
    </div>
  )
}
