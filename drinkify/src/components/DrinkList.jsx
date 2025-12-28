import styles from "../styles/drink-list.module.css";
import DrinkCard from "./DrinkCard";
import DrinksSkeleton from "./DrinksSkeleton";

import lemon from "/icons/lemon.svg";

function DrinkList({ drinks = [], results, loading }) {

  return (
    <section className={styles["drink-list"]}>
      {results ?? (
        <header className={`${styles["drink-list__header"]} split-border`}>
          <h2 className={styles["drink-list__title"]}>
            <span className={styles["drink-list__results"]}>Resultados</span>
            <span className={styles["drink-list__count"]}>{drinks.length}</span>
            bebidas encontradas
          </h2>

          <img
            className={styles["drink-list__lemon"]}
            src={lemon}
            alt="Icono de limón"
          />
        </header>
      )}

      <div className={styles["drink-list__cont"]}>
        {loading 
          ? Array.from({ length: 8 }).map((_, i) => (
              <DrinksSkeleton key={i}></DrinksSkeleton>
            ))
          : drinks.map((item) => (
              <DrinkCard key={item.id} drink={item} />
            ))
        }
      
      </div>
    </section>
  );
}

export default DrinkList;
