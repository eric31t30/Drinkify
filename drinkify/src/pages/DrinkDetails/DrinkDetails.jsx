import { useEffect, useState } from "react";
import styles from "./drink-details.module.css";
import { useParams } from "react-router-dom";

import { useBreakPoints } from "../../custom-hooks/UseBreakpoints";

import DrinkHero from "../../components/drink-details/DrinkHero/DrinkHero";
import DrinkInfo from "../../components/drink-details/DrinkInfo/DrinkInfo";
import DrinkIngredients from "../../components/drink-details/DrinkIngredients/DrinkIngredients";
import DrinkPreparation from "../../components/drink-details/DrinkPreparation/DrinkPreparation";
import DrinkRecommendations from "../../components/drink-details/DrinkRecommendations/DrinkRecommendations";
import DrinkImages from "../../components/drink-details/DrinkImages/DrinkImages";
import DrinkInsights from "../../components/drink-details/DrinkInsights/DrinkInsights";
import Loader from "../../components/common/Loader/Loader";
import NoData from "../../components/common/NoData/NoData";

function DrinkDetails() {

  const [status, setStatus] = useState("loading")

  const { id } = useParams();
  const [drink, setDrink] = useState(null)
  const [recommendations, setRecommendations] = useState(null);

  const limit = useBreakPoints();
  
  useEffect(() => {

    const loadData = async()=>{
      try {
        setStatus("loading");
        const quantity = limit >= 1920 ? 3 : 4;

        const [drinkRes, recRes] = await Promise.all([
          fetch(`/api/drinks/${id}`),
          fetch(
            `/api/drinks/${id}/recommendations?limit=${quantity}`
          ),
        ]);

        const drinkData = await drinkRes.json();
        const recData = await recRes.json();

        if (!drinkRes.ok) {
          throw new Error(drinkData.message || "No se pudo cargar la bebida");
        }

        if (!recRes.ok) {
          throw new Error("No se pudieron cargar las recomendaciones");
        }

        setDrink(drinkData);
        setRecommendations(recData);
        setStatus("success");

      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    }

    loadData()

  }, [id, limit])

  
  if (status === "loading") {
    return <Loader />;
  }

  if (status === "error") {
    return (
      <NoData />
    );
  }

  return (
    <section className={styles.drink}>
      <DrinkHero drink={drink} />

      <div className={styles["drink-content"]}>
        <section className={styles.info}>
          <DrinkInfo drink={drink} />
          <DrinkIngredients drink={drink} />
        </section>
      </div>

      <DrinkPreparation drink={drink} />

      <div className={styles["drink-content"]}>
        <div className={styles["drink-extras"]}>
          <div className={styles["images-cont"]}>
            <DrinkImages drink={drink}></DrinkImages>
          </div>
          <div className={styles["insights-cont"]}>
            <DrinkInsights drink={drink}></DrinkInsights>
          </div>
          <span
            className={styles["float-name"]}
            style={{
              textShadow: `
              0px 1px 0 ${drink.color}, 
              1px 0px 0 ${drink.color},
              0px -1px 0 ${drink.color}, 
              -1px 0px 0 ${drink.color}`,
              "--text-border": drink.color
            }}
          >
            {drink.name}
          </span>
        </div>
        <section className={styles["recommended-drinks"]}>
          <DrinkRecommendations
            drink={drink}
            recommendations={recommendations}
          />
        </section>
      </div>
    </section>
  );
}

export default DrinkDetails;
