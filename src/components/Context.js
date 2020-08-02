import React, { Component, createContext } from 'react'
import { storeProducts, detailProduct } from '../data'

// Create a context
const ProductsContext = createContext()

// Create a provider
class ProductsProvider extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      detailProduct: detailProduct,
      cart: [],
      modalOpen: false,
      subTotal: 0,
      subTax: 0,
      total: 0,
    }
  }

  // Copy storeProducts to state.products
  setProducts = () => {
    let tempProducts = []
    storeProducts.forEach((item) => {
      const singleProdcut = { ...item }
      tempProducts = [...tempProducts, singleProdcut]
    })
    this.setState({ products: tempProducts })
  }

  // Get detail information of a product that has been clicked
  getDetailProduct = (id) => {
    const product = this.getProduct(id)
    this.setState({ detailProduct: product })
  }

  // Add products to cart & calculate total price after setting state
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

  // Remove item from cart and update total price
  removeItem = (id) => {
    let tempProducts = [...this.state.products],
      productsInCart = [...this.state.cart]
    productsInCart = productsInCart.filter((item) => item.id !== id)
    let index = tempProducts.indexOf(this.getProduct(id)),
      curProduct = tempProducts[index]
    curProduct.count = 0
    curProduct.inCart = false
    curProduct.total = 0
    this.setState(
      {
        products: tempProducts,
        cart: productsInCart,
      },
      () => this.getTotalPrice()
    )
  }

  // Retreive a product by id
  getProduct = (id) => this.state.products.find((elem) => elem.id === id)

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  /* Adds prices of products inside the cart & calculate
   * total after adding tax on this
   */
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

  // Clear cart, restore products & totals to initial state
  clearCart = () => {
    this.setState({ cart: [] }, () => {
      this.setProducts()
      this.getTotalPrice()
    })
  }

  // Increment number of products
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

  // Decrement number of products
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

  componentDidMount = () => {
    this.setProducts()
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

// Create a consumer
const ProductsConsumer = ProductsContext.Consumer

export { ProductsProvider, ProductsConsumer }
