import { useEffect, useRef, useState } from "react";

import { useSearchParams } from "react-router-dom";

import styles from './home.module.css'
import DrinkList from "../../components/DrinkList/DrinkList";

import Hero from "../../components/Home/Hero/Hero";
import Search from "../../components/Home/Search/Search";
import Loader from "../../components/common/Loader/Loader";
import NoData from "../../components/common/NoData/NoData";

function Home() {

  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const category = searchParams.get("category") || "all";
  const level = searchParams.get("level") || "all";
  const search = searchParams.get("search") || "";

  const listRef = useRef(null);
  const shouldScrollRef = useRef(false);

  const [drinks, setDrinks] = useState({
    data: [],
    pagination: {},
  });
  const [categories, setCategories] = useState([]);

  const [totalDrinks, setTotalDrinks] = useState(null)

  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const loadData = async () => {
      try {
        const [drinksRes, categoriesRes] = await Promise.all([
          fetch(
            `/api/drinks?page=${page}&limit=12&search=${encodeURIComponent(search)}&category=${category}&level=${level}`
          ),
          fetch("/api/categories"),
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
        setTotalDrinks(drinksData.pagination.total);
        setStatus("success");
      } catch (err) {
        console.error("Error al cargar los datos", err);
        setStatus("error");
      }
    };

    loadData();
  }, [ page, category, level, search ]);

  const goToPage = (newPage) => {
    shouldScrollRef.current = true;

    setSearchParams((prev) => {
      prev.set("page", newPage);
      return prev;
    });
  };

  useEffect(() => {
    if (status === "success" && shouldScrollRef.current) {
      requestAnimationFrame(() => {
        listRef.current?.scrollIntoView({
          block: "start",
        });
      });
      
      shouldScrollRef.current = false;
    }
  }, [page, status]);


  const scrollToSearch = () => {
    listRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className={styles.home}>
      <Hero onScrollToSearch={scrollToSearch} />

      {status === "loading" && <Loader />}
      {status === "error" && <NoData />}

      {status !== "error" &&
        (
          <div className={styles["home-content"]}>
            <Search localCategories={categories} ref={listRef} />
          
            <DrinkList
              drinks={drinks.data}
              page={page}
              totalDrinks={totalDrinks}
              totalPages={drinks.pagination?.totalPages}
              onPageChange={goToPage}
              showPagination={true}
              loading={status === "loading"}
            />
          </div>
        )
      }
    </section>
  );
}

export default Home;
