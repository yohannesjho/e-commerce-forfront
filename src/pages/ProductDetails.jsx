import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://e-commerce-backend-dhot.onrender.com/api/user/products/${productId}`)
            console.log(response)

            const data = await response.json()

            setProduct(data)
            console.log(data)
        }

        fetchProduct()
    }, [productId])
    console.log(product)
    return (
        <div>
            <div className="px-8 py-6 space-y-4 sm:space-y-0 sm:flex justify-between">
                <div className="">
                    {product.imgUrls && product.imgUrls.length > 0 ? (
                        <img src={product.imgUrls[0]} alt={product.name} />
                    ) : (
                        <p>Loading image...</p>
                    )}
                </div>

                <div className="border-2 w-96 shadow-md rounded-lg p-8">
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