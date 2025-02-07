import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/cartContext';

const Cards = ({ source = 'home', searchQuery }) => {
    console.log(searchQuery)
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true);
     

    useEffect(() => {
        const fetchProducts = async () => {
            try {

                const response = await fetch('https://e-commerce-backend-dhot.onrender.com/api/user/products')

                const data = await response.json()
                setProducts(data)


            } catch (error) {

            } finally {
                setLoading(false);
            }

        }

        fetchProducts()
    }, [])


    const { addToCart } = useCart()

    const validProducts = Array.isArray(products) ? products : [];

    const newProducts = source === 'home' ? validProducts.slice(0, 5) : searchQuery ? validProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )   :validProducts;

    const handleAddToCart = (product) => {
        console.log(product)

        addToCart(
            {
                id: product._id,
                name: product.name,
                price: product.price,
                img: product.imgUrls,
                description: product.description
            }

        )
    }
    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 py-8 lg:px-32 lg:py-24 '>
                        {newProducts.map((product) => (
                            <div key={product.id} className='border space-y-4 pb-4 rounded-lg shadow-lg'>
                                <Link to={`/product/${product._id}`} key={product._id} className=' rounded-md space-y-4 pb-4'>
                                    <div className='h-72'>
                                        <img src={product.imgUrls[0]} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='text-center space-y-6'>
                                        <p>{product.name}</p>
                                        <p>ETB{' '}{product.price}</p>

                                    </div>

                                </Link>
                                <div className='text-center'>

                                    <button onClick={() => handleAddToCart(product)} className='bg-purple-500 px-2 py-1 rounded-md text-white hover:bg-purple-200 duration-300'>Add to cart</button>
                                </div>
                            </div>
                        ))}

                    </div>
                </>)}
        </div>
    )
}

export default Cards