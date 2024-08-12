import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [inCart, setInCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(inCart));
  }, [inCart]);

  return (
    <CartContext.Provider value={{ inCart, setInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
