import { createContext, useContext, useState, useEffect, Children } from 'react'

//create cart context

const CartContext = createContext()

//cart provider

export const cartProvider = ({ childeren }) => {

    const [cartItems, setCartItems] = useState([])

    //retrieve cart items when the app mounts

    useEffect(() => {
        const storedItems = localStorage.getItem('cartItems')

        if (storedItems.length > 0) {
            setCartItems(json.parse(storedItems))
        }
    }, [])

    //load items when there is a change in cart items

    useEffect(() => {
        localStorage.setItem('cartItems', Json.stringify(cartItems))
    }, [cartItems])

    //Add items to the cart

    const addToCart = (product) => {
        const itemExists = cartItems.find(item => item.id == product.id)

        if (itemExists) {
            setCartItems(cartItems.map(item => (
                item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item
            )))
        }
        else {
            setCartItems([...cartItems, { product, quantity: 1 }])
        }
    }
    //function to remove items from cart

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    //function to clear all items from the cart

    const clearAllItems = () => {
        setCartItems([])

        localStorage.removeItem('cartItems')
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearAllItems }}>
            {Children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return (
        useContext(CartContext)
    )
}
