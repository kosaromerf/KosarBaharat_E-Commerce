import React, { createContext, useState, useEffect } from "react";

//Setting the useContext
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //Getting items in cart from local storge if available
  const [inCart, setInCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  //Changing the local storage every time items in cart changed
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
