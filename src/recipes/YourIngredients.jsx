import { useNavigate } from "react-router";
import { useRecipes } from "../FindMyRecipeContext.jsx";
import IngredientItem from "./IngredientItem.jsx";
import useMutation from "../api/useMutation.jsx";

export default function YourIngredients() {
  let navigate = useNavigate();
  const { yourIngredients, setRecipes } = useRecipes();

  const { mutate: get } = useMutation("POST", "/recipes", ["recipes"]);

  const getRecipes = () => {
    const ingredientNameArray = yourIngredients.map(
      (ingredient) => ingredient.name
    );
    const recipes = get(ingredientNameArray);
    console.log(yourIngredients);
    console.log(ingredientNameArray);
    setRecipes(recipes);
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
