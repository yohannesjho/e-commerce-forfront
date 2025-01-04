import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'

const Products = ({ products }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])


    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
        
    };

    useEffect(() => {
        const filtered =products && products.length > 0 ? products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase())) : <></>
        
        setFilteredProducts(filtered)
    }, [searchQuery])



    return (
        <div>
            <div className='text-center my-8'>

                <input value={searchQuery} onChange={handleSearchQuery} type='text' placeholder='search your product here' className={`px-4 py-1 md:w-1/2 border-4 border-slate-950 rounded-md outline-none text-black`} />
            </div>
            <Cards source="products" products={filteredProducts} />
        </div>
    )
}

export default Products