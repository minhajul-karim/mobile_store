import React, { Component } from 'react'
import CartColumn from './CartColumn'
import ListOfCartItems from './ListOfCartItems'
import { ProductsConsumer } from '../Context'
import Total from './Total'

export default class Cart extends Component {
  render() {
    return (
      <ProductsConsumer>
        {(context) => {
          const { cart, increment, decrement } = context
          if (cart.length === 0) {
            return (
              <h1 className="text-center mt-5">
                Your cart is currently empty!
              </h1>
            )
          } else {
            return (
              <>
                <h1 className="text-center my-4">Your cart</h1>
                <CartColumn />
                <ListOfCartItems
                  cart={cart}
                  increment={increment}
                  decrement={decrement}
                />
                <Total context={context} />
              </>
            )
          }
        }}
      </ProductsConsumer>
    )
  }
}
