import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Contacts from './pages/Contacts'

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/product' element={<ProductDetails />}></Route>
            <Route path='/about'  element={<About />}></Route>
            <Route path="contact" element={<Contacts />}></Route>

          </Routes>

        </Layout>
      </Router>

    </>
  )
}

export default App
