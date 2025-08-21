import React, { createContext, useContext, useState } from "react";

const ListaDeseosContexto = createContext();

export function ListaDeseosProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <ListaDeseosContexto.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </ListaDeseosContexto.Provider>
  );
}

export function useListaDeseos() {
  return useContext(ListaDeseosContexto);
}
