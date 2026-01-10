import styles from "./drink-preparation.module.css";

import leafs from "/illustrations/leafs-2.svg";
import clock from "/icons/clock.svg"

import martini from "/illustrations/martini.svg";
import piña from "/illustrations/piña-colada.svg";

function DrinkPreparation({ drink }) {
  return (
    <section
      className={styles["preparation"]}
      style={{ background: drink.color }}
    >
      <article className={styles["preparation-cont"]}>
        <h2 className={styles.title}>Preparacion</h2>

        <div className={styles["preparation-info"]}>
          <div className={styles["preparation-steps-cont"]}>
            {drink.preparation.map((p, i) => (
              <div className={styles["preparation-steps"]} key={i}>
                <div className={styles["step-index"]}>
                  <p>{i + 1}</p>
                </div>
                <p className={styles["step"]}>{p}</p>
              </div>
            ))}
          </div>

          <article className={styles.time}>
            <div className={styles["prep-time-cont"]}>
              <img className={styles["prep-icon"]} src={clock} alt="" />
              <p className={styles["prep-time"]}>
                Tiempo estimado: <span>{drink.prepTime}</span>
              </p>
            </div>
          </article>
        </div>
      </article>

      <img
        className={`${styles.drinks} ${styles["drink-1"]}`}
        src={martini}
        alt=""
      />
      <img
        className={`${styles.drinks} ${styles["drink-2"]}`}
        src={piña}
        alt=""
      />

      <div className={styles["shadow-1"]}></div>
      <div className={styles["shadow-2"]}></div>
      <img className={styles.leafs} src={leafs} alt="" />
      <div className={styles.circle}></div>
    </section>
  );
}

export default DrinkPreparation