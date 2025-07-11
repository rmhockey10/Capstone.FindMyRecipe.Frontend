import { Link } from "react-router";

export default function IndividualRecipe({ recipe }) {
  return (
    <>
      <Link to={`/recipes/${recipe.id}`} className="recipe-link">
        <section className="IndividualRecipe">
          <h2>{recipe.name}</h2>
          <img
            className="IndivdualRecipe-img"
            src={recipe.image}
            alt={recipe.name}
          />
          <p>
            You have {recipe.matchPercentage}% of the ingredients to make this
            recipe.
          </p>
          <p>Difficulty: {recipe.difficulty}</p>
        </section>
      </Link>
    </>
  );
}
