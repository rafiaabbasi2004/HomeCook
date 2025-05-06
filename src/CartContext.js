import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

 // Updated addToCart
const addToCart = (item, persons = 1) => {
  alert("item Added to cart");
  setCartItems((prev) => {
    const existingItem = prev.find((i) => i.heading === item.heading);
    if (existingItem) {
      return prev.map((i) =>
        i.heading === item.heading
          ? { ...i, persons: i.persons + persons }
          : i
      );
    } else {
      return [...prev, { ...item, persons }];
    }
  });
};


  const removeFromCart = (itemHeading) => {
    setCartItems((prev) => prev.filter((i) => i.heading !== itemHeading));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
  value={{ cartItems, addToCart, removeFromCart, clearCart }}
>
      {children}
    </CartContext.Provider>
  );
};
