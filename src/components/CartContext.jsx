
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [bookmarkCount, setBookmarkCount] = useState(0); // Bookmark state

  const addToCart = () => {
    console.log('Add to Cart clicked!');
    setCartCount(prev => prev + 1);
  };

  const addToBookmark = () => {
    console.log('Add to Bookmark clicked!');
    setBookmarkCount(prev => prev + 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, bookmarkCount, addToBookmark }}>
      {children}
    </CartContext.Provider>
  );
};
