import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useRecipes } from "../FindMyRecipeContext.jsx";
import IngredientItem from "./IngredientItem.jsx";
import useMutation from "../api/useMutation.jsx";
import style from "./Youringredients.module.css";

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
    <section className="ListOfYourIngredients">
      <h3>Your Ingredients</h3>
      {yourIngredients.length === 0 ? (
        <>
          <p>No Ingredients selected</p>
        </>
      ) : (
        <>
          <ul
            className={`ingredient-list ingredient-list-reponsive ${style.listResponsive}`}
          >
            {yourIngredients
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((ingredient) => (
                <IngredientItem key={ingredient.id} ingredient={ingredient} />
              ))}
          </ul>
          <button className={style.listResponsive} onClick={getRecipes}>
            Find Recipes
          </button>
        </>
      )}
    </section>
  );
}
