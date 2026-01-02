import styles from "./drink-list.module.css";

import DrinkCard from "../DrinkCard/DrinkCard";
import DrinksSkeleton from "../common/DrinkSkeleton/DrinksSkeleton";

import lemon from "/icons/lemon.svg";
import arrow from "/icons/arrow.svg"
import NoResults from "../common/NoResults/NoResults";
import { useEffect } from "react";

function DrinkList(
  { 
    drinks = [], 
    results, 
    showPagination, 
    loading, 
    page, 
    totalPages, 
    totalDrinks,
    onPageChange, 
  }
) {

  useEffect(() => {
    console.log(drinks);
    
  }, [drinks])
  

  return (
    <section className={styles["drink-list"]}>
      {results ?? (
        <header className={`${styles["drink-list__header"]} border-color`}>
          <h2 className={styles["drink-list__title"]}>
            <span className={styles["drink-list__results"]}>Resultados</span>
            <span className={styles["drink-list__count"]}>{totalDrinks}</span>
            bebidas encontradas
          </h2>

          <img
            className={styles["drink-list__lemon"]}
            src={lemon}
            alt="Icono de limón"
          />
        </header>
      )}

      {!loading && drinks.length === 0 ? (
        <NoResults />
      ) : (
        <div className={styles["drink-list__cont"]}>
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <DrinksSkeleton key={i}></DrinksSkeleton>
              ))
            : drinks.map((item) => <DrinkCard key={item.id} drink={item} />)}
        </div>
      )}

      {showPagination && (
        <div className={styles.pagination}>
          <button
            className={`${styles["pagination-button"]} ${styles["prev-button"]}`}
            disabled={page === 1 || drinks.length === 0}
            onClick={() => onPageChange(page - 1)}
          >
            <img src={arrow} alt="previous button" />
          </button>

          <span className={styles["current-page"]}>{page}</span>

          <button
            className={`${styles["pagination-button"]} ${styles["next-button"]}`}
            disabled={page === totalPages || drinks.length === 0}
            onClick={() => onPageChange(page + 1)}
          >
            <img src={arrow} alt="next button" />
          </button>
        </div>
      )}
    </section>
  );
}

export default DrinkList;