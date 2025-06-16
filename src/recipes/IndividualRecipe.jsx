import { Link } from "react-router";

export default function IndividualRecipe({ recipe }) {
  return (
    <>
      <Link to={`/recipes/${recipe.id}`} className="recipe-link">
        <section className="IndividualRecipe">
          <h2>{recipe.name}</h2>
          <img src={recipe.image} alt={recipe.name} />
          <p>Difficulty: {recipe.difficulty}</p>
        </section>
      </Link>
    </>
  );
}
