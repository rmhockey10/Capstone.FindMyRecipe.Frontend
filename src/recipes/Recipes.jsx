import IndividualRecipes from "./IndividualRecipes";

export default function Recipes() {
  return (
    <>
      <article className="Recipes">
        <h2>Your Recipe Results</h2>
        <p>Click on a recipe to get details</p>
        <IndividualRecipes />
      </article>
    </>
  );
}
