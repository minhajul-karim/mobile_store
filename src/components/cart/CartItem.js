import React from 'react'
import { ProductsConsumer } from '../Context'

export default function CartItem(props) {
  const { id, img, title, price, count } = props.cartItem
  return (
    <ProductsConsumer>
      {(context) => {
        const { increment, decrement, removeItem } = context
        return (
          <div className="container-fluid text-center">
            <div className="row mb-2">
              <div className="col-md-2 mb-1">
                <img
                  src={img}
                  alt="Product"
                  style={{ width: '5rem', height: '5rem' }}
                />
              </div>
              <div className="col-md-2 mb-1">
                <p>{title}</p>
              </div>
              <div className="col-md-2 mb-1">
                <p>${price}</p>
              </div>
              <div className="col-md-2 mb-1">
                <span className="btn q-btn mr-1" onClick={() => increment(id)}>
                  +
                </span>
                <span className="btn q-btn mr-1">{count}</span>
                <span className="btn q-btn mr-1" onClick={() => decrement(id)}>
                  -
                </span>
              </div>
              <div className="col-md-2 mb-1">
                <i
                  className="fas fa-trash"
                  style={{ cursor: 'pointer' }}
                  onClick={() => removeItem(id)}
                ></i>
              </div>
              <div className="col-md-2 mb-1">${count * price}</div>
            </div>
          </div>
        )
      }}
    </ProductsConsumer>
  )
}
