import React from 'react'

const Cards = ({ source = 'home', products }) => {
    console.log(products)

    const validProducts = Array.isArray(products) ? products : [];

    const newProducts = source === 'home' ? validProducts.slice(0, 5) : validProducts;
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-32 py-24'>
                {newProducts.map((product) => (

                    <div key={product._id} className='border rounded-md space-y-4 pb-4'>
                        <div className='h-72'>
                            <img src={product.imgUrls[0]} className='w-full h-full object-cover' />
                        </div>
                        <div className='text-center space-y-6'>
                            <p>{product.name}</p>
                            <p>ETB{' '}{product.price}</p>
                            <button className='bg-purple-500 px-2 py-1 rounded-md text-white hover:bg-purple-200 duration-300'>Add to cart</button>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Cards