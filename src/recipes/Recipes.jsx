// import IndividualRecipe from "./IndividualRecipe";
// import { useRecipes } from "../FindMyRecipeContext";

// export default function Recipes() {
//   const { recipes, yourIngredients } = useRecipes();

//   return (
//     <>
//       <article className="Recipes">
//         <h2>Your Recipe Results</h2>
//         <p>Click on a recipe to get details</p>
//         {recipes?.map((recipe) => (
//           <IndividualRecipe key={recipe.id} recipe={recipe} />
//         ))}
//       </article>
//     </>
//   );
// }

import IndividualRecipe from "./IndividualRecipe";
import { useRecipes } from "../FindMyRecipeContext";

export default function Recipes() {
  const { recipes, yourIngredients } = useRecipes();

  // Extract names from objects and normalize
  const normalizedIngredients = yourIngredients
    .map((ingredient) =>
      typeof ingredient.name === "string" ? ingredient.name.toLowerCase() : ""
    )
    .filter(Boolean); // removes empty strings

const sortedRecipes = recipes
  ?.map((recipe) => {
    const recipeIngredients = (recipe.ingredients || [])
      .filter((ingredient) => typeof ingredient === "string")
      .map((ingredient) => ingredient.toLowerCase());

    const matches = recipeIngredients.filter((ingredient) =>
      normalizedIngredients.includes(ingredient)
    ).length;

    const total = recipeIngredients.length;
    const matchPercentage = total > 0 ? Math.round((matches / total) * 100) : 0;

    return { ...recipe, matchScore: matches, matchPercentage };
  })
  .sort((a, b) => b.matchScore - a.matchScore);

  return (
    <article className="Recipes">
      <h2>Your Recipe Results</h2>
      <p>Click on a recipe to get details</p>
      {sortedRecipes?.map((recipe) => (
        <IndividualRecipe key={recipe.id} recipe={recipe} />
      ))}
    </article>
  );
}
