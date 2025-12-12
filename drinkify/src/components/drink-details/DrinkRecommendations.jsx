import styles from "../../styles/drink-recommendations.module.css";
import DrinkList from "../DrinkList";

function DrinkRecommendations({ drink, recommendations }) {
  return (
    <section className={styles.recommendations}>
      <h2 className={styles.title}>
        <span style={{ color: drink.color }}>Simil</span>ares
      </h2>

      <article className={styles["recommendations-container"]}>
        <DrinkList drinks={recommendations} results={false}></DrinkList>
      </article>
    </section>
  );
}

export default DrinkRecommendations;
