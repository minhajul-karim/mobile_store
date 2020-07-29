import React from 'react'
import CartItem from './CartItem'

export default function ListOfCartItems(props) {
  const { cart, increment } = props
  return (
    <div className="container-fluid">
      {cart.map((item) => (
        <CartItem key={item.id} cartItem={item} increment={increment} />
      ))}
    </div>
  )
}
