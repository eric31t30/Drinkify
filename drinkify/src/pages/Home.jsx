import { useEffect, useMemo, useState } from "react";

import styles from '../styles/home.module.css'
import DrinkList from "../components/DrinkList";

import Hero from "../components/Hero";
import Search from "../components/Search";

function Home() {
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    category: "all",
    level: "all",
    search: "",
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [drinksRes, categoriesRes] = await Promise.all([
          fetch("http://localhost:3000/drinks"),
          fetch("http://localhost:3000/categories"),
        ]);

        const [drinksData, categoriesData] = await Promise.all([
          drinksRes.json(),
          categoriesRes.json(),
        ]);

        setDrinks(drinksData);
        setCategories(categoriesData);
      } catch (err) {
        console.error("Error al cargar los datos", err);
      }
    };

    loadData();
  }, []);

  const filteredDrinks = useMemo(() => {
    let result = [...drinks];
    const searchTerm = filters.search.toLowerCase().trim();

    if (filters.category !== "all") {
      result = result.filter((d) => d.category === filters.category);
    }

    if (filters.level !== "all") {
      result = result.filter((d) => d.alcohol.level === filters.level);
    }

    if (searchTerm) {
      result = result.filter((d) => {
        const name = d.name.toLowerCase();
        return name.includes(searchTerm);
      });
    }

    return result;
  }, [filters.category, filters.level, filters.search, drinks]);

  return (
    <section className={styles.home}>

      <Hero />
      
      <div className={styles["home-content"]}>
        <Search
          localCategories={categories}
          filters={filters}
          setFilters={setFilters}
        />
        <DrinkList drinks={filteredDrinks} />
      </div>
    </section>
  );
}

export default Home;
