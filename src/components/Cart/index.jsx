import React, { createContext, useContext, useState } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const Cart = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getQuantityProducts = () => {
    return cart.length;
  }

  const verifyExistProductInCart = (product) => {
    const exists = cart.some(item => item.id === product.id);
    if (exists) {
      alert("Produto já adicionado ao carrinho");
    }
  };

  const clearCart = () => {

    if (cart.length === 0) {
      alert("Adicione algum produto no carrinho para efetuar a compra");
    } else {
      setCart([])
      alert("Compra realizada com sucesso!");
    }
  }

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert("Produto adicionado ao carrinho");
  };

  const removeProductFromCart = (productId) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeProductFromCart, getQuantityProducts, clearCart, verifyExistProductInCart }}>
      {children}
    </CartContext.Provider>
  );
};