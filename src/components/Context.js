import React, { Component, createContext } from 'react'
import { storeProducts, detailProduct } from '../data'

// create a context
const ProductsContext = createContext()

// create a provider
class ProductsProvider extends Component {
  constructor() {
    super()
    this.state = {
      products: storeProducts,
      detailProduct: detailProduct,
      cart: [],
      modalOpen: false,
      subTotal: 0,
      subTax: 0,
      total: 0,
    }
  }

  getDetailProduct = (id) => {
    const product = this.getProduct(id)
    this.setState({ detailProduct: product })
  }

  addToCart = (id) => {
    const products = [...this.state.products]
    let index = products.indexOf(this.getProduct(id)),
      curProduct = products[index]
    curProduct.count = 1
    curProduct.inCart = true
    curProduct.total = curProduct.price
    this.setState(
      {
        products: products,
        detailProduct: curProduct,
        cart: [...this.state.cart, curProduct],
      },
      () => this.getTotalPrice()
    )
  }

  removeItem = (id) => {
    const productsInCart = [...this.state.cart]
    let index = productsInCart.indexOf(this.getProduct(id))
    productsInCart.splice(index, 1)
    this.setState({ cart: productsInCart }, () => this.getTotalPrice())
  }

  getProduct = (id) => this.state.products.find((elem) => elem.id === id)

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  getTotalPrice = () => {
    let subTotal = 0
    this.state.cart.forEach((item) => (subTotal += item.price * item.count))
    let subTax = parseFloat((subTotal * 0.1).toFixed(2)),
      total = subTotal + subTax
    this.setState({
      subTotal: subTotal,
      subTax: subTax,
      total: total,
    })
  }

  clearCart = () => {
    this.setState({
      cart: [],
      subTotal: 0,
      subTax: 0,
      total: 0,
      products: this.state.products.map((item) => {
        if (item.inCart) {
          item.inCart = false
          return item
        } else return item
      }),
    })
  }

  increment = (id) => {
    const products = [...this.state.products]
    let index = products.indexOf(this.getProduct(id)),
      curProduct = products[index]
    if (curProduct.count < 9) {
      curProduct.count += 1
      curProduct.total += curProduct.price
      this.setState(
        {
          products: products,
        },
        () => this.getTotalPrice()
      )
    }
  }

  decrement = (id) => {
    const products = [...this.state.products]
    let index = products.indexOf(this.getProduct(id)),
      curProduct = products[index]
    if (curProduct.count > 1) {
      curProduct.count -= 1
      curProduct.total -= curProduct.price
      this.setState(
        {
          products: products,
        },
        () => this.getTotalPrice()
      )
    }
  }

  render() {
    return (
      <ProductsContext.Provider
        value={{
          ...this.state,
          getDetailProduct: this.getDetailProduct,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          clearCart: this.clearCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
        }}
      >
        {this.props.children}
      </ProductsContext.Provider>
    )
  }
}

// create a consumer
const ProductsConsumer = ProductsContext.Consumer

export { ProductsProvider, ProductsConsumer }
