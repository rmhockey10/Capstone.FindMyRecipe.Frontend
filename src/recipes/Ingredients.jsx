import useQuery from "../api/useQuery";
import { useYourIngredients } from "../SelectedIngredientsContext";

export default function Ingredients() {
  // const { data: ingredients, loading, error } = useQuery("/books", "books");
  const { yourIngredients, addToYourIngredients } = useYourIngredients();

  // if (loading || !ingredients) return <p>Loading...</p>;
  // if (error) return <p>Sorry!!! {error}</p>;

  return (
    <ul>
      {dummyData.map((ingredient) => (
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

const dummyData = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Carrot" },
  { id: 4, name: "Salmon" },
  { id: 5, name: "Bread" },
  { id: 6, name: "Cheese" },
  { id: 7, name: "Steak" },
  { id: 8, name: "Broccoli" },
  { id: 9, name: "Rice" },
  { id: 10, name: "Yogurt" },
];
