import Ingredients from "./Ingredients.jsx";
import YourIngredients from "./YourIngredients.jsx";

export default function HomePage() {
  return (
    <>
      <article>
        <section className="Ingredients">
          <h2>What&apos;s in your fridge?</h2>
          <p>Select from below items:</p>
          <Ingredients />
        </section>
        <section className="YourIngredients">
          <YourIngredients />
        </section>
      </article>
    </>
  );
}
