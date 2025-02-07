import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../contexts/cartContext'


const ProductDetails = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const { addToCart } = useCart()
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://e-commerce-backend-dhot.onrender.com/api/user/products/${productId}`)


                const data = await response.json()

                setProduct(data)
            } catch (error) {

            } finally {
                setLoading(false)
            }

        }

        fetchProduct()
    }, [productId])


    const handleAddToCart = (product) => {


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
            <div className="md:px-8 md:py-6 space-y-4 sm:space-y-0 sm:flex justify-between">
                <div className="text-center">
                    {product.imgUrls && product.imgUrls.length > 0 ? (
                        <img src={product.imgUrls[0]} alt={product.name} className=' mx-auto' />
                    ) : (
                        <div className="flex justify-center items-center  ml-8 mt-16">
                            <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                        </div>
                    )}
                </div>

                <div className="border-2 md:w-96 shadow-md rounded-lg p-8">
                    <h1 className="text-sm md:text-2xl font-bold mb-4 uppercase">{product.name}</h1>
                    <p className="  "><span className='mr-2 font-bold uppercase text-sm md:text-xl'>Price:</span> ${product.price}</p>
                    <p className="   "><span className='mr-2 font-bold uppercase text-sm md:text-xl'>Category:</span> {product.category}</p>
                    <p className="   "><span className='mr-2 font-bold uppercase text-sm md:text-xl'>Brand:</span> {product.brand}</p>
                    <p className=" "><span className='mr-2 font-bold uppercase text-sm md:text-xl'>Description:</span> {product.description}</p>
                    <button onClick={() => handleAddToCart(product)} className="bg-purple-500 px-2 py-1 rounded-md hover:bg-purple-400 hover:text-white duration-300 w-full my-6">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails