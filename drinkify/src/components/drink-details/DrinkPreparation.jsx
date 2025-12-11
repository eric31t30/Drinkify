import styles from "../../styles/drink-preparation.module.css";

import leafs from "/illustrations/leafs-2.svg";
import clock from "/icons/clock.svg"

function DrinkPreparation({ drink }) {
  return (
    <section
      className={styles["preparation"]}
      style={{ background: drink.color }}
    >
      <article className={styles["preparation-cont"]}>
        <h2 className={styles.title}>Preparacion</h2>
        
        {drink.preparation.map((p, i) => (
          <div className={styles["preparation-steps"]} key={i}>
            <div className={styles["step-index"]}>
              <p>{i + 1}</p>
            </div>
            <p className={styles["step"]}>{p}</p>
          </div>
        ))}

        <div className={styles["prep-time-cont"]}>
          <img className={styles["prep-icon"]} src={clock} alt="" />
          <p className={styles["prep-time"]}>
            Tiempo estimado: <span>{drink.prepTime}</span>
          </p>
        </div>

      </article>

      <div className={styles["shadow-1"]}></div>
      <div className={styles["shadow-2"]}></div>
      <img className={styles.leafs} src={leafs} alt="" />
      <div className={styles.circle}></div>
    </section>
  );
}

export default DrinkPreparation