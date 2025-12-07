import styles from "../../styles/drink-recommendations.module.css";
import DrinkCard from "../DrinkCard";

function DrinkRecommendations({ drink, recommendations }) {
  return (
    <section className={styles.recommendations}>
      <h2>
        <span style={{ color: drink.color }}>Simil</span>ares
      </h2>

      <article className={styles["recommendations-container"]}>
        {recommendations.map((item) => (
          <DrinkCard key={item.id} drink={item} />
        ))}
      </article>
    </section>
  );
}

export default DrinkRecommendations;
