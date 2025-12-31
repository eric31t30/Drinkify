import { useEffect, useState } from 'react';
import styles from './search.module.css'

import search from '/icons/search.svg'
import cocktail from "/icons/cocktail.svg";
import drink from "/icons/drink.svg";
import bottle from "/icons/bottle.svg";

function Search({ localCategories, filters, setFilters}) {

  const[input, setInput] = useState("")

  
  const categories = [
    { label: "Todos", value: "all" },
    ...localCategories.map((cat) => ({
      label: cat,
      value: cat,
    })),
  ];

  const levels = [
    { label: "Todos", value: "all" },
    { label: "Bajo", value: "Bajo" },
    { label: "Medio", value: "Medio" },
    { label: "Alto", value: "Alto" },
  ];


  useEffect(() => {
    const id = setTimeout(() => {
      setFilters((prev) => ({ ...prev, search: input }));
    }, 150);

    return () => clearTimeout(id);
  }, [input, setFilters]);

  return (
    <section className={styles.search} id="drink-list">
      <h2 className={styles.title}>
        Explora la colección de bebidas
        <img className={styles["title-icon"]} src={cocktail} alt="" />
      </h2>

      <div className={styles["search-input-cont"]}>
        <img className={styles["search-icon"]} src={search} alt="" />
        <input
          className={styles["search-input"]}
          type="text"
          name="search"
          placeholder="Buscar bebidas..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className={styles["search-filters"]}>
        <div
          className={`${styles["search-filter-cont"]} ${styles["search-filter-type"]}`}
        >
          <h2 className={styles["search-filter-title"]}>
            <img className={styles["search-title-icon"]} src={drink} alt="" />
            Category
          </h2>
          <div className={styles["search-filter-buttons"]}>
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`${styles["search-button-filter"]} ${
                  filters.category === cat.value
                    ? styles["search-button-type-active"]
                    : ""
                }`}
                onClick={() =>
                  setFilters((prev) => ({ ...prev, category: cat.value }))
                }
              >
                {cat.label}
                <span
                  className={`${styles["search-border"]} ${
                    filters.category === cat.value
                      ? styles["search-no-border"]
                      : ""
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>
        <div className={styles["search-filter-cont"]}>
          <h2 className={styles["search-filter-title"]}>
            <img
              className={styles["search-title-icon"]}
              src={bottle}
              alt="icon"
            />
            Nivel de alcohol
          </h2>
          <div className={styles["search-filter-buttons"]}>
            {levels.map((lvl) => (
              <button
                key={lvl.value}
                className={`${styles["search-button-filter"]} ${
                  filters.level === lvl.value
                    ? styles["search-button-type-active"]
                    : ""
                }`}
                onClick={() =>
                  setFilters((prev) => ({ ...prev, level: lvl.value }))
                }
              >
                {lvl.label}
                <span
                  className={`${styles["search-border"]} ${
                    filters.level === lvl.value
                      ? styles["search-no-border"]
                      : ""
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search