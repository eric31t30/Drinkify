import { useEffect, useMemo, useState } from "react";

import styles from './home.module.css'
import DrinkList from "../../components/DrinkList/DrinkList";

import Hero from "../../components/Home/Hero/Hero";
import Search from "../../components/Home/Search/Search";
import Loader from "../../components/common/Loader/Loader";
import NoData from "../../components/common/NoData/NoData";

function Home() {
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    category: "all",
    level: "all",
    search: "",
  });

  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const loadData = async () => {
      try {
        const [drinksRes, categoriesRes] = await Promise.all([
          fetch("http://localhost:3000/api/drinks"),
          fetch("http://localhost:3000/api/categories"),
        ]);

        if (!drinksRes.ok || !categoriesRes.ok) {
          throw new Error("Error al cargar los datos");
        }

        const [drinksData, categoriesData] = await Promise.all([
          drinksRes.json(),
          categoriesRes.json(),
        ]);

        setDrinks(drinksData);
        setCategories(categoriesData);
        setStatus("success");
      } catch (err) {
        console.error("Error al cargar los datos", err);
        setStatus("error");
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

      {status === "loading" && <Loader />}

      {status === "error" && <NoData />}

      {status === "success" && (
        <div className={styles["home-content"]}>
          <Search
            localCategories={categories}
            filters={filters}
            setFilters={setFilters}
          />
          <DrinkList drinks={filteredDrinks} />
        </div>
      )}
    </section>
  );
}

export default Home;
