import { createContext, useContext, useState } from "react";

// 1. Create the context
const CartContext = createContext();

// 2. Create a Provider for that context
export function CartProvider({ children }) {
  const [yourIngredients, setYourIngredients] = useState([]);

  const addToYourIngredients = (ingredient) => {
    const exists = yourIngredients.some((item) => item.id === ingredient.id);

    if (exists) {
      setYourIngredients(
        yourIngredients.filter((item) => item.id !== ingredient.id)
      );
    } else {
      setYourIngredients([...yourIngredients, ingredient]);
    }
  };

  const value = { yourIngredients, setYourIngredients, addToYourIngredients };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// 3. Create a hook to consume that context
export function useYourIngredients() {
  const context = useContext(CartContext);
  if (!context)
    throw Error(
      "useYourIngredients must be used within a CartContext Provider"
    );
  return context;
}
