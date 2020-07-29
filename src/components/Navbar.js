import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ButtonWrapper } from './Button'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <>
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
            <ButtonWrapper>My cart</ButtonWrapper>
          </Link>
        </NavWrapper>
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
