import useQuery from "../api/useQuery";
import { useRecipes } from "../FindMyRecipeContext";
import style from "./ingredients.module.css";

export default function Ingredients() {
  const {
    data: ingredients,
    loading,
    error,
  } = useQuery("/ingredients", "ingredients");
  const { yourIngredients, toggleYourIngredients } = useRecipes();

  if (loading || !ingredients) return <p>Loading...</p>;
  if (error) return <p>Sorry!!! {error}</p>;

  return (
    <ul className={style.listResponsive}>
      {ingredients.map((ingredient) => (
        <IngredientListItem
          key={ingredient.id}
          ingredient={ingredient}
          isChecked={yourIngredients.some((item) => item.id === ingredient.id)}
          onChange={() => toggleYourIngredients(ingredient)}
        />
      ))}
    </ul>
  );
}

//checkout html element 'fieldset'
function IngredientListItem({ ingredient, isChecked, onChange }) {
  return (
    <li className="ingredient-item">
      <label>
        <input
          className={style.checked}
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
        {ingredient.name}
      </label>
    </li>
  );
}
