import { forwardRef, useEffect, useState, useRef } from "react";
import styles from './search.module.css'

import search from '/icons/search.svg'
import cocktail from "/icons/cocktail.svg";
import drink from "/icons/drink.svg";
import bottle from "/icons/bottle.svg";
import { useSearchParams } from 'react-router-dom';

const Search = forwardRef(function Search({ localCategories }, ref) {

  const [searchParams, setSearchParams] = useSearchParams();
  
  const searchFromUrl = searchParams.get("search") || "";
  const [input, setInput] = useState(searchFromUrl);

  const isFirstRender = useRef(true);

  const filters = {
    category: searchParams.get("category") || "all",
    level: searchParams.get("level") || "all",
    search: searchParams.get("search") || "",
  };

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
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (input === searchFromUrl) return;

    const id = setTimeout(() => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);

        if (input) {
          next.set("search", input);
          next.set("page", "1");
        } else {
          next.delete("search");
          next.delete("page");
        }

        return next;
      });
    }, 300);

    return () => clearTimeout(id);
  }, [input, searchFromUrl, setSearchParams]);

  const setFilter = (key, value) => {
    setSearchParams((prev) => {
      prev.set(key, value);
      prev.set("page", 1);
      return prev;
    });
  };

  useEffect(() => {
    setInput(searchFromUrl);
  }, [searchFromUrl]);

  return (
    <section ref={ref} className={styles.search} id="drink-list">
      <h2 className={styles.title}>
        Explora la colección de bebidas
        <img
          className={styles["title-icon"]}
          width="28px"
          height="28px"
          src={cocktail}
          alt=""
        />
      </h2>

      <div className={styles["search-input-cont"]}>
        <img className={styles["search-icon"]} src={search} alt="" />
        <input
          className={styles["search-input"]}
          type="text"
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
            <img
              className={styles["search-title-icon"]}
              width="28px"
              height="28px"
              src={drink}
              alt=""
            />
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
                onClick={() => setFilter("category", cat.value)}
              >
                {cat.label}
                <span
                  className={`${styles["search-border"]} ${
                    filters.category === cat.value
                      ? styles["search-no-border"]
                      : ""
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className={styles["search-filter-cont"]}>
          <h2 className={styles["search-filter-title"]}>
            <img
              className={styles["search-title-icon"]}
              width="28px"
              height="28px"
              src={bottle}
              alt=""
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
                onClick={() => setFilter("level", lvl.value)}
              >
                {lvl.label}
                <span
                  className={`${styles["search-border"]} ${
                    filters.level === lvl.value
                      ? styles["search-no-border"]
                      : ""
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Search;
