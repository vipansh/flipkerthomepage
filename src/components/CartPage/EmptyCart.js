import React from 'react'
import { Link } from 'react-router-dom'

export const EmptyCart = () => {
  return (
    <div className="container mt-100 mx-auto">
    <div className="flex justify-center items-center">
        <div className="mt-12">
            <div className="card">
                <div className="card-body cart">
                    <div className="flex items-center justify-center flex-col text-4xl"> <img src="https://i.imgur.com/dCdflKN.png" width="230" height="230" className="p-0" alt=""/>
                        <h3 className="p-4 mt-4"><strong>Your Cart is Empty</strong></h3>
                        <h4 className="p-4 mt-4">Add something to make me happy :)</h4>
                         <Link to="/" className="bg-indigo-500 font-semibold hover:bg-indigo-600 p-4  text-white uppercase w-full text-center rounded-lg text-5xl" data-abc="true">Continue shopping</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
