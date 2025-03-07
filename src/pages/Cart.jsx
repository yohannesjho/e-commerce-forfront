import React from 'react'
import { useCart } from '../contexts/cartContext'

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart()
    console.log(cartItems)


    const handleRemove = (id) => {
        removeFromCart(id)
    }

    const handleClearCart = () => {
        clearCart()
    }

    const handlePlaceOrder = async () => {
        try {

        } catch (error) {

        }
    }
    let price;
    return (
        <>
            {cartItems && cartItems.length > 0 ? (
                <div>


                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-12 py-8 border'>
                        {cartItems.map((item) => (
                            <div key={item.id} className=' rounded-lg shadow-lg'>
                                {/* Image */}
                                <div className=' w-32 h-32'>
                                    {item.img && item.img.length > 0 ? (
                                        <img src={item.img[0]} className='w-full h-full object-cover' alt={item.name} />
                                    ) : (
                                        <p>Loading...</p>
                                    )}
                                </div>
                                {/* Name */}
                                <div className='flex gap-4'>
                                    <span className='font-bold uppercase'>Name:</span>
                                    <p>{item.name}</p>
                                </div>
                                {/* Quantity */}
                                <div className='flex gap-4'>
                                    <span className='font-bold uppercase'>Quantity:</span>
                                    <p>{item.quantity}</p>
                                </div>
                                {/* Price */}
                                <div className='flex gap-4'>
                                    <span className='font-bold uppercase'>Price:</span>
                                    <p>{item.quantity * item.price}</p>
                                </div>
                                {/* Remove Button */}
                                <div className='mt-4'>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className='bg-purple-600 px-2 py-1 rounded-md text-white hover:bg-purple-200 duration-500'
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}


                    </div>
                    <div className='m-4 flex space-x-4 '>
                        <p className='bg-purple-500  px-2 py-1 rounded-md text-white'>Total cost: {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)}</p>
                        <button onClick={() => { handleClearCart() }} className='bg-red-500 px-2 py-1 rounded-md hover:bg-red-400 text-white duration-300'>clear cart</button>

                        <button onClick={handlePlaceOrder} className='bg-green-500 px-2 py-1 rounded-md hover:bg-green-400 text-white duration-300 '>Place order</button>
                    </div>
                </div>
            ) : (
                <div className='text-center py-8'>
                    <p>Your cart is empty!</p>
                </div>
            )}
        </>
    );


}

export default Cart