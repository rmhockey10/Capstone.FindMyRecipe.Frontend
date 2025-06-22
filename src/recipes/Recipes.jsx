import IndividualRecipe from "./IndividualRecipe";
import { useRecipes } from "../FindMyRecipeContext";

export default function Recipes() {
  const { recipes } = useRecipes();
  return (
    <>
      <div className="Recipes">
        <div className="Recipes-list">
          {recipes?.map((recipe) => (
            <IndividualRecipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
}
