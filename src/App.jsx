import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Contacts from './pages/Contacts'
import { useEffect, useState } from 'react'
import Cart from './pages/Cart'
import { CartProvider } from './contexts/cartContext'

function App() {
 
  return (
    <>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path='/'  element={<Home />}></Route>
              <Route path='/products' element={<Products />}></Route>
              <Route path='/product/:productId' element={<ProductDetails />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path="/contact" element={<Contacts />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </>
  )
}

export default App
