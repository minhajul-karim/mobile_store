import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductsConsumer } from './Context'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product

    return (
      <ProductsConsumer>
        {(context) => {
          return (
            <ProductWrapper
              className="col-md-6 col-lg-4 my-3"
              onClick={() => context.getDetailProduct(id)}
            >
              <div className="card">
                <div className="card-body">
                  <Link to="/details">
                    <img src={img} alt="Product image" />
                  </Link>
                  <button
                    className="cart-button"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      context.addToCart(id)
                      context.openModal()
                    }}
                  >
                    {inCart ? 'in cart' : <i className="fas fa-cart-plus"></i>}
                    {/* {inCart ? 'in cart' : 'add'} */}
                  </button>
                </div>
                <div className="card-footer">
                  <span>{title}</span>
                  <span className="float-right">${price}</span>
                </div>
              </div>
            </ProductWrapper>
          )
        }}
      </ProductsConsumer>
    )
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
}

const ProductWrapper = styled.div`
  .card {
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 0rem;
  }
  &:hover {
    border: 0.04rem solid rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }
  .card-body {
    overflow: hidden;
    cursor: pointer;
  }
  &:hover img {
    transform: scale(1.2);
  }

  .card-body:hover .cart-button {
    transform: translate(-20px, -40px);
    background: #3498db;
    &:hover {
      background: #2980b9;
    }
  }

  .card-body img {
    width: 100%;
    transition: all 0.5s linear;
  }

  .card-footer {
    font-size: 15px;
    background-color: rgba(0, 0, 0, 0);
    border-top: 1px solid rgba(0, 0, 0, 0);
  }

  .cart-button {
    border: 0px;
    border-radius: 5px 0px 0px 0px;
    background: transparent;
    color: #fff;
    padding: 5px 10px;
    cursor: pointer;
    position: absolute;
    right: 0px;
    bottom: 0px;
    transition: all 0.3s linear;
    transform: translate(40px, 35px);
  }
`
