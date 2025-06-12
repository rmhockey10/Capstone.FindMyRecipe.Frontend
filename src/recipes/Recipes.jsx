import IndividualRecipe from "./IndividualRecipe";
import { useRecipes } from "../FindMyRecipeContext";

export default function Recipes() {
  const { recipes } = useRecipes();
  // export on line 4 then becomes a reuseable peiece of HTML (thats what we needed to import)
  return (
    <>
      <article className="Recipes">
        <h2>Your Recipe Results</h2>
        <p>Click on a recipe to get details</p>
        <IndividualRecipe />
      </article>
    </>
  );
}
