export default function IngredientItem({ ingredient }) {
  return (
    <li className="ingredient-item">
      <div>{ingredient.name}</div>
    </li>
  );
}
