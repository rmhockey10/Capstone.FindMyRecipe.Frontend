import Ingredients from "./Ingredients.jsx";
import YourIngredients from "./YourIngredients.jsx";
import style from "./ingredients.module.css";

export default function HomePage() {
  return (
    <>
      <article>
        <section className="Ingredients">
          <h2 className={style.h2}>What&apos;s in your fridge?</h2>
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
