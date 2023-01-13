import React, { createContext, useContext, useState, useEffect } from "react";

const Cart = createContext();
const cartInit = JSON.parse(localStorage.getItem("cart")) || [];

export const useCartContext = () => {
  return useContext(Cart);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartInit);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const productExist = (id) => {
    return cart.some((product) => product.id == id);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const deleteProduct = (id) => {
    let products = cart.filter((product) => product.id != id);
    setCart([...products]);
  };

  const priceTotalCart = () => {
    return cart.reduce(
      (value, product) => value + product.price * product.count,
      0
    );
  };

  const totalCount = () => {
    return cart.reduce((a, product) => a + product.count, 0);
  };

  const changeAmount = (id, productID) => {
    let products = cart.filter((product) => product.id != id);
    setCart([...products, productID]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Cart.Provider
      value={{
        cart,
        addToCart,
        productExist,
        emptyCart,
        deleteProduct,
        priceTotalCart,
        totalCount,
        changeAmount,
      }}
    >
      {children}
    </Cart.Provider>
  );
};
