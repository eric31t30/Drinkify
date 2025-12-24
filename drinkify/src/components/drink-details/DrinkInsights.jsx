import { useEffect, useState } from "react";
import styles from "../../styles/drink-insights.module.css"

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { cloudinary } from "../../utils/Cloudinary";

import fire from '../../../public/icons/fire.svg'
import book from "../../../public/icons/book.svg";
import tag from "../../../public/icons/tag.svg";

import leaf from "/illustrations/leafs-3.svg"

function DrinkInsights({ drink }) {

  const [progress, setProgress] = useState(0);
  const difficultyValue = drink.difficulty.value;
  const percentage = (difficultyValue / 10) * 100;

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  useEffect(() => {
    console.log(drink);
    
  }, [drink])

  return (
    <section className={styles.insights}>
      <article
        className={`${styles["insight-cont"]} ${styles.difficulty}`}
        style={{ border: `2px solid ${drink.color}` }}
      >
        <div className={styles["insight-title-cont"]}>
          <h3 className={styles["insight-title"]}>
            Intensidad
            <img className={styles["title-icon"]} src={fire} alt="" />
          </h3>
          <p className={styles["label"]}>{drink.difficulty.label}</p>
        </div>

        <div className={styles["progress-cont"]}>
          <div className={styles["circle-container"]}>
            <div className={styles.circle}>
              <CircularProgressbar
                className={styles.circle}
                value={progress}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathColor: drink.color,
                  textColor: drink.color,
                  backgroundColor: "#39a0d8ff",
                  pathTransitionDuration: 1,
                })}
              />
            </div>
          </div>
        </div>
        <div className={styles["insights-deco"]}>
          <img className={styles["difficulty-deco"]} src={leaf} alt="" />
        </div>
      </article>

      <article
        className={`${styles["insight-cont"]} ${styles.history}`}
        style={{ background: drink.color }}
      >
        <h3 className={styles["insight-title"]}>
          <img className={styles["title-icon"]} src={book} alt="" />
          Historia
        </h3>
        <p className={styles["insight-text"]}>{drink.history}</p>

        <div
          className={`${styles["insights-deco"]} ${styles["history-insights-deco"]}`}
        >
          <span className={styles["history-deco"]}></span>
        </div>
      </article>

      <article
        className={`${styles["insight-cont"]} ${styles.tags}`}
        style={{ border: `2px solid ${drink.color}` }}
      >
        <h3 className={styles["insight-title"]}>
          <img className={styles["title-icon"]} src={tag} alt="" />
          Etiquetas
        </h3>
        <div className={styles["tags-cont"]}>
          {drink.tags.map((t) => (
            <p
              key={t}
              className={`${styles["insight-text"]} ${styles["insight-tag"]}`}
              style={{
                border: `2px solid ${drink.color}`,
                color: drink.color,
              }}
            >
              {t}
            </p>
          ))}
        </div>

        <div
          className={`${styles["insights-deco"]} ${styles["tag-insights-deco"]}`}
        >
          <img
            className={styles["tag-deco"]}
            src={cloudinary(drink.images.full)}
            alt=""
          />
          <span className={styles.block}></span>
        </div>
      </article>
    </section>
  );
}

export default DrinkInsights

{
  /* <div className={styles["image-cont"]}>
          <img
            className={styles.image}
            src={cloudinary(drink.images.full)}
            alt=""
          />
          <span className={styles.block}></span>
        </div> */
}