import React from 'react'
import { Link } from 'react-router-dom'
import PayPalButton from './PayPalButton'

export default function Total(props) {
  const { subTotal, subTax, total, clearCart } = props.context
  return (
    <div className="container text-right">
      <div className="row">
        <div className="col">
          <Link to="/">
            <button
              type="button"
              className="btn btn-danger btn-lg mb-4"
              onClick={() => clearCart()}
            >
              Clear cart
            </button>
          </Link>
          <h4 className="text-uppercase">Subtotal: ${subTotal}</h4>
          <h4 className="text-uppercase">Subtax: ${subTax}</h4>
          <h4 className="text-uppercase">Total: ${total}</h4>
          <PayPalButton
            total={total}
            clearCart={clearCart}
            history={props.history}
          ></PayPalButton>
        </div>
      </div>
    </div>
  )
}
