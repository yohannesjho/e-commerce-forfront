import React from 'react'
import { useCart } from '../contexts/cartContext'

const Cart = () => {
    const { cartItems, removeFromCart} = useCart()
    console.log(cartItems)

    const handleRemove = (id) => {
        removeFromCart(id)
    }
    return (
        <div className='grid gird-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-12 py-8 '>
            {cartItems.map((item) => (
                <div key={item.id} className=''>
                    <div className='border w-32 h-32'>

                        {item.img && item.img.length > 0 ? (<img src={item.img[0]} className='w-full h-full object-cover' />) : (<p>Loading...</p>)}
                    </div>
                    <div className='flex gap-4 '>
                        <span className='font-bold uppercase'>name:</span><p>{item.name}</p>
                    </div>

                    <div className='flex gap-4'>
                        <span className='font-bold uppercase'>quantity:</span><p>{item.quantity}</p>
                    </div>
                    <div className='flex gap-4'>
                        <span className='font-bold uppercase'>price:</span><p>{item.quantity * item.price}</p>
                    </div>
                    <div className='mt-4'>
                        <button onClick={() => { handleRemove(item.id) }} className='bg-purple-600 px-2 py-1 rounded-md text-white  hover:bg-purple-200 duration-500'>Remove</button>
                    </div>

                </div>

            ))}
        </div>
    )
}

export default Cart