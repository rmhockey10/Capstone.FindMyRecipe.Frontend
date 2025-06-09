import { useYourIngredients } from "../SelectedIngredientsContext.jsx";
import IngredientItem from "./IngredientItem.jsx";

export default function YourIngredients() {
  const { yourIngredients } = useYourIngredients();

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
          <button>Search</button>
        </>
      )}
    </section>
  );
}
