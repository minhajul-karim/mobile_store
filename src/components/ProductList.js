import React, { Component, useContext } from 'react'
import Product from './Product'
import { storeProducts } from '../data'
import { ProductsConsumer } from './Context'

export default class ProductList extends Component {
  constructor() {
    super()
    this.state = {
      products: storeProducts,
    }
  }
  render() {
    return (
      <>
        <h1 className="text-center mt-3">Our Products</h1>
        <div className="container">
          <div className="row">
            <ProductsConsumer>
              {(context) =>
                context.products.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              }
            </ProductsConsumer>
          </div>
        </div>
      </>
    )
  }
}
