import React, { createContext, useContext, useState, useEffect } from 'react'

const Cart = createContext()

export const useCartContext = () => {
    return useContext(Cart)
}
 
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
   
    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const productExist = (id) => {
        return (cart.some((product)=>product.id ==id));
    }

    return (
      <Cart.Provider value={{ cart, addToCart, productExist }}>
        {children}
      </Cart.Provider>
    );
}
