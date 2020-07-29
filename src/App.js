import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './components/cart/Cart'
import Default from './components/Default'
import Details from './components/Details'
import ProductList from './components/ProductList'
import Modal from './components/Modal'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Details} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  )
}

export default App
