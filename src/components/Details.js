import React, { Component } from 'react'
import { ProductsConsumer } from './Context'
import { ButtonWrapper } from './Button'
import { Link } from 'react-router-dom'

export default class Details extends Component {
  render() {
    return (
      <ProductsConsumer>
        {(context) => {
          const {
            id,
            company,
            img,
            inCart,
            info,
            price,
            title,
          } = context.detailProduct
          return (
            <div className="container my-5">
              <div className="row">
                <div className="col-md-6">
                  <img className="w-100" src={img} alt="Product image" />
                </div>
                <div className="col-md-6 ml-auto">
                  <h1>{title}</h1>
                  <h3>By {company}</h3>
                  <h3 className="text-muted">Price: ${price}</h3>
                  <p>{info}</p>
                  <Link to="/" className="mr-2">
                    <ButtonWrapper>Go back</ButtonWrapper>
                  </Link>
                  <Link to="#">
                    <ButtonWrapper
                      onClick={() => context.addToCart(id)}
                      disabled={inCart ? true : false}
                    >
                      {inCart ? 'in cart' : 'Add to cart'}
                    </ButtonWrapper>
                  </Link>
                </div>
              </div>
            </div>
          )
        }}
      </ProductsConsumer>
    )
  }
}
