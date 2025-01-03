import React from 'react'
import Cards from '../components/Cards'

const Products = ({ products }) => {
  return (
    <div>
        <Cards source = "products" products={ products }/>
    </div>
  )
}

export default Products