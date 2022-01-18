import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const handleChange = (product, amount) => {
    const productExists = cart.findIndex(p => p.id === product.id);
    if (productExists !== -1) {
      const newCart = [...cart];
      newCart[productExists].amount += amount;
      if (newCart[productExists].amount <= 0) {
        newCart.splice(productExists, 1);
      }
      setCart(newCart);
    }
    else {
      setCart([...cart, { ...product, amount }]);
    }
  }

  return (
    <Context.Provider value={{ cart, handleChange }}>
      {children}
    </Context.Provider>
  )
}