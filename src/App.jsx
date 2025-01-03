import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>

        </Layout>
      </Router>

    </>
  )
}

export default App
