import { createContext, useContext, useState } from "react";

// 1. Create the context
const CartContext = createContext();

// 2. Create a Provider for that context
export function CartProvider({ children }) {
  const [yourIngredients, setYourIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

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

  const value = {
    yourIngredients,
    setYourIngredients,
    addToYourIngredients,
    recipes,
    setRecipes,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// 3. Create a hook to consume that context
export function useRecipes() {
  const context = useContext(CartContext);
  if (!context)
    throw Error("useRecipes must be used within a CartContext Provider");
  return context;
}

const dummyRecipes = [];
