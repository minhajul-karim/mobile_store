import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ButtonWrapper } from './Button'
import { ProductsConsumer } from './Context'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <ProductsConsumer>
          {(context) => {
            return (
              <NavWrapper className="navbar navbar-expand-sm navbar-light">
                <Link className="navbar-brand" to="/">
                  Store
                </Link>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Products
                    </Link>
                  </li>
                </ul>
                <Link className="ml-auto" to="/cart">
                  <i
                    class="fas fa-shopping-cart fa-lg"
                    style={{ color: '#fff' }}
                  ></i>
                  {context.cart.length > 0 ? (
                    <span style={{ marginLeft: 5, color: '#fff' }}>
                      {context.cart.length}
                    </span>
                  ) : null}
                </Link>
              </NavWrapper>
            )
          }}
        </ProductsConsumer>
      </>
    )
  }
}

const NavWrapper = styled.nav`
  background: #8e44ad;
  .nav-link,
  .navbar-brand {
    color: #fff !important;
  }
`
