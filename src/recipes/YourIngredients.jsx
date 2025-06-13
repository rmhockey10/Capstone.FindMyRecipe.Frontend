import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useRecipes } from "../FindMyRecipeContext.jsx";
import IngredientItem from "./IngredientItem.jsx";
import useMutation from "../api/useMutation.jsx";

export default function YourIngredients() {
  let navigate = useNavigate();
  const { yourIngredients, setRecipes } = useRecipes();

  const { mutate: get, data } = useMutation("POST", "/recipes", ["recipes"]);
  useEffect(() => {
    if (data) {
      setRecipes(data);
      navigate("/recipes");
    }
  }, [data, navigate, setRecipes]);

  const getRecipes = async () => {
    const ingredientNameArray = yourIngredients.map(
      (ingredient) => ingredient.name
    );
    const bodyForRecipes = { ingredients: ingredientNameArray };
    const recipes = await get(bodyForRecipes);
    if (recipes) {
      setRecipes(data);
    }
    navigate("/recipes");
  };

  return (
    <section className="YourIngredients">
      <h3>Your Ingredients</h3>
      {yourIngredients.length === 0 ? (
        <>
          <p>No Ingredients selected</p>
          <button>Search</button>
        </>
      ) : (
        <>
          <ul className="ingredient-list">
            {yourIngredients.map((ingredient) => (
              <IngredientItem key={ingredient.id} ingredient={ingredient} />
            ))}
          </ul>
          <button onClick={getRecipes}>Find Recipes</button>
        </>
      )}
    </section>
  );
}
