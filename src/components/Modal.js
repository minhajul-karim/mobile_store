import React, { Component } from 'react'
import { ProductsConsumer } from './Context'
import { ButtonWrapper } from './Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Modal extends Component {
  render() {
    return (
      <ProductsConsumer>
        {(context) => {
          const { title, img, price } = context.detailProduct
          if (context.modalOpen === true) {
            return (
              <ModalWrapper>
                <div className="text-center py-5" id="modal">
                  <h5>Item added to cart</h5>
                  <img src={img} alt="Product image" />
                  <h5 className="text-muted">Price: {price}</h5>
                  <Link to="/">
                    <ButtonWrapper
                      className="mb-3 btn-lg"
                      onClick={() => context.closeModal()}
                    >
                      Continue shopping
                    </ButtonWrapper>
                  </Link>
                  <Link to="/cart">
                    <ButtonWrapper
                      className="btn-lg"
                      onClick={() => context.closeModal()}
                    >
                      Go to cart
                    </ButtonWrapper>
                  </Link>
                </div>
              </ModalWrapper>
            )
          }
        }}
      </ProductsConsumer>
    )
  }
}

const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.3);
  #modal {
    background: #fff;
    opacity: 1;
  }
  .btn-lg {
    display: block;
    margin: 0 auto;
  }
`

export default Modal
