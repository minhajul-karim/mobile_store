import React from 'react'

export default function Total(props) {
  const { subTotal, subTax, total, clearCart } = props.context
  return (
    <div className="container text-right">
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-danger btn-lg mb-4"
            onClick={() => clearCart()}
          >
            Clear cart
          </button>
          <h4 className="text-uppercase">Subtotal: ${subTotal}</h4>
          <h4 className="text-uppercase">Subtax: ${subTax}</h4>
          <h4 className="text-uppercase">Total: ${total}</h4>
        </div>
      </div>
    </div>
  )
}
