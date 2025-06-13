import useQuery from "../api/useQuery";
import { useRecipes } from "../FindMyRecipeContext";

export default function Ingredients() {
  const {
    data: ingredients,
    loading,
    error,
  } = useQuery("/ingredients", "ingredients");
  const { yourIngredients, addToYourIngredients } = useRecipes();

  if (loading || !ingredients) return <p>Loading...</p>;
  if (error) return <p>Sorry!!! {error}</p>;

  return (
    <ul>
      {ingredients.map((ingredient) => (
        <IngredientListItem
          key={ingredient.id}
          ingredient={ingredient}
          isChecked={yourIngredients.some((item) => item.id === ingredient.id)}
          onChange={() => addToYourIngredients(ingredient)}
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
        <input type="checkbox" checked={isChecked} onChange={onChange} />
        {ingredient.name}
      </label>
    </li>
  );
}