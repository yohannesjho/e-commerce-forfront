import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Contacts from './pages/Contacts'
import { useEffect, useState } from 'react'
import Cart from './pages/Cart'

function App() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://e-commerce-backend-dhot.onrender.com/api/user/products')

      const data = await response.json()
      setProducts(data)
       

    }

    fetchProducts()
  }, [])

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home products={products} />}></Route>
            <Route path='/products' element={<Products products={products} />}></Route>
            <Route path='/product/:productId' element={<ProductDetails />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path="/contact" element={<Contacts />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>

        </Layout>
      </Router>

    </>
  )
}

export default App
