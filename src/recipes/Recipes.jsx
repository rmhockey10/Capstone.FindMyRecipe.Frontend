import IndividualRecipe from "./IndividualRecipe";
import { useRecipes } from "../FindMyRecipeContext";

export default function Recipes() {
  const { recipes } = useRecipes();
  console.log({ recipes });
  console.log(typeof recipes);
  // export on line 4 then becomes a reuseable peiece of HTML (thats what we needed to import)
  return (
    <>
      <article className="Recipes">
        <h2>Your Recipe Results</h2>
        <p>Click on a recipe to get details</p>
        {recipes?.map((recipe) => (
          <IndividualRecipe key={recipe.id} recipe ={recipe} />
        ))}
      </article>
    </>
  );
}

// const renderBooks = () => {
//     return recipes.map((recipe) => {
//       return (
//         <a
//           style={{ display: "block" }}
//           href={`/recipes/${recipe.id}`}
//           key={recipe.id}
//         >
//         </a>
//       );
//     });
//   };
//   return (
//     <div>
//       <div>{renderBooks()}</div>
//     </div>
//   );

// }
