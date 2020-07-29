import React from 'react'

export default function CartComponent() {
  return (
    <div className="container-fluid d-none d-lg-block text-center">
      <div className="row">
        <div className="col text-uppercase">
          <h5>Products</h5>
        </div>
        <div className="col text-uppercase">
          <h5>Names</h5>
        </div>
        <div className="col text-uppercase">
          <h5>price</h5>
        </div>
        <div className="col text-uppercase">
          <h5>Quantity</h5>
        </div>
        <div className="col text-uppercase">
          <h5>Remove</h5>
        </div>
        <div className="col text-uppercase">
          <h5>Total</h5>
        </div>
      </div>
      <hr />
    </div>
  )
}
