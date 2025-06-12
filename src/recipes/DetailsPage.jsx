import Recipes from "./Recipes";
const dummyData = {
  Title: " Crab Rangoon Casserole",
  PrepTime: "30min",
  CookTime: "45min",
  Ingredients: [" 1 pound egg ", "2 tablespoons butter"],
  directions: ["preheat the oven to 400 degrees F (200 degree)"],
  Cusine: "Seafood",
  Serving: "4",
  Difficulty: "Easy",
  CaloriesPerServing: "400",
};
// no curly braces on the imports / for componants
export default function DetailsPage() {
  const RenderIngredents = () => {
    return dummyData.Ingredients.map((Ing) => {
      return (
        <div key={Ing}>
          <p>- {Ing}</p>
        </div>
      );
    });
  };
  const RenderDirections = () => {
    return dummyData.directions.map((Dir, index) => {
      return (
        <div key={Dir}>
          <p> step {index + 1}</p>
          <p> {Dir}</p>
        </div>
      );
    });
  };
  return (
    <div>
      <h1> {dummyData.Title}</h1>
      <div>
        <section>
          <p>PrepTime: {dummyData.PrepTime}</p>
          <p>CookTime: {dummyData.CookTime}</p>
        </section>
        <section>
          <p>Cusine: {dummyData.Cusine}</p>
          <p>Serving: {dummyData.Serving} </p>
        </section>
        <section>
          <p> Difficulty: {dummyData.Difficulty}</p>
          <p> CaloriesPerServing: {dummyData.CaloriesPerServing}</p>
        </section>
      </div>
      <div>
        <h2>Ingredents</h2>
        {RenderIngredents()}
      </div>
      <div>
        <h2>Directions</h2>
        {RenderDirections()}
      </div>
      <Recipes />
    </div>
  );
}
