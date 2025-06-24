import { useEffect, useState } from "react";
import { useApi } from "../api/ApiContext";
import { useParams } from "react-router";
import styles from "./DetailsPage.module.css";
/*const dummyData = {
  Title: " Crab Rangoon Casserole",
  PrepTime: "30min",
  CookTime: "45min",
  Ingredients: [" 1 pound egg ", "2 tablespoons butter"],
  directions: ["preheat the oven to 400 degrees F (200 degree)"],
  Cusine: "Seafood",
  Serving: "4",
  Difficulty: "Easy",
  CaloriesPerServing: "400",
};*/
// no curly braces on the imports / for componants
export default function DetailsPage() {
  const params = useParams();
  const { request } = useApi();
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    const getRecipe = async () => {
      try {
        const res = await request(`/recipes/${params.Id}`);
        console.log(res);
        setRecipe(res);
      } catch (error) {
        console.log(error);
      }
    };
    getRecipe();
  }, []);
  const RenderIngredents = () => {
    if (!recipe?.ingredients?.length) {
      return (
        <div>
          <p>No ingredients found</p>
        </div>
      );
    }
    return recipe.ingredients.map((Ing) => {
      return (
        <div key={Ing} className={styles.ingredientsContainer}>
          <div>
            <p>- {Ing}</p>
          </div>
        </div>
      );
    });
  };
  const RenderDirections = () => {
    if (
      !recipe?.instructions?.length
      //||
      //typeof recipe.instructions === "string"
    ) {
      return (
        <div>
          <p>No instructions found</p>
        </div>
      );
    }

    return recipe.instructions.map((Dir, index) => {
      return (
        <div key={Dir} className={styles.directionsContainer}>
          <div>
            <p> Step {index + 1}</p>
            <p> {Dir}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <section className={styles.topSection}>
        <section>
          <h1 className={styles.title}> {recipe?.name}</h1>

          <div className={styles.firstSteps}>
            <section>
              <p>PrepTime: {recipe?.prep_time_minutes}</p>
              <p>CookTime: {recipe?.cook_time_minutes}</p>
            </section>
            <section>
              <p>Cuisine: {recipe?.cuisine}</p>
              <p>Serving: {recipe?.servings} </p>
            </section>
            <section>
              <p> Difficulty: {recipe?.difficulty}</p>
              <p> CaloriesPerServing: {recipe?.calories_per_serving}</p>
            </section>
          </div>
        </section>
        <section>
          <img className={styles.image} src={recipe?.image} />
        </section>
      </section>
      <section className={styles.bottomSection}>
        <div className={styles.ingredients}>
          <h2>Ingredents</h2>
          {RenderIngredents()}
        </div>
        <div className={styles.directions}>
          <h2>Directions</h2>
          {RenderDirections()}
        </div>
      </section>
    </div>
  );
}
