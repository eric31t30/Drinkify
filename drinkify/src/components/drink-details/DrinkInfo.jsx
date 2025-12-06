import styles from "../../styles/drink-info.module.css";

import fire from "/icons/fire.svg";
import drops from "/icons/drops.svg";
import drinkIcon from "/icons/drink-2.svg";

function DrinkInfo({ drink }) {

  const alcoholInfo = [
    {
      icon: fire,
      title: "Intensidad",
      value: drink.alcohol.level,
    },
    {
      icon: drops,
      title: "Alcohol",
      value: `${drink.alcohol.abv}% ABV`,
    },
    {
      icon: drinkIcon,
      title: "Tipo",
      value: drink.alcohol.type,
    },
  ];
  
  return (
    <section className={styles["drink-info"]}>
      <h2 className={styles["drink-details-title"]}>
        <span style={{ color: drink.color }}>Det</span>alles
      </h2>

      <div className={styles["info-cont"]}>
        {alcoholInfo.map((data) => (
          <article className={styles["info-card"]} key={data.value}>
            <div className={styles["info-icon"]}>
              <img src={data.icon} alt="icono de intensidad" />
              <span style={{ background: drink.color }}></span>
            </div>
        
            <div className={styles["info-text"]}>
              <p className={styles["info-title"]}>{data.title}</p>
              <p className={styles["info-data"]}>{data.value}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default DrinkInfo