import { useEffect, useState } from "react";
import styles from "../styles/drink-details.module.css";
import { useParams } from "react-router-dom";

import DrinkHero from "../components/drink-details/DrinkHero";
import DrinkInfo from "../components/drink-details/DrinkInfo";
import DrinkIngredients from "../components/drink-details/DrinkIngredients";
import DrinkPreparation from "../components/drink-details/DrinkPreparation";
import Footer from "../components/footer";
import DrinkRecommendations from "../components/drink-details/DrinkRecommendations";
import DrinkImages from "../components/drink-details/DrinkImages";
import DrinkInsights from "../components/drink-details/DrinkInsights";

function DrinkDetails() {

  const { id } = useParams();
  const [drink, setDrink] = useState(null)
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {

    const getdrink = async()=>{
      try{
        const res = await fetch(`http://localhost:3000/drink/${id}`);
        const data = await res.json()
        setDrink(data)
        console.log(data);
          
      }catch(err){
        console.error("Error al cargar la bebida", err);   
      }
    }

    getdrink();

    const getSimilars = async()=>{
      try {
        const res = await fetch(`http://localhost:3000/recommendations/drink/${id}?limit=4`);
        const data = await res.json();
        setRecommendations(data);
        console.log(data);
        
      } catch (err) {
        console.error("Error al cargar la bebida", err);
      }

    }

    getSimilars();

  }, [id])

  
  if (!drink) return <p>Cargando...</p>;
  if (!recommendations) return <p>Cargando...</p>;

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

      <Footer />
    </section>
  );
}

export default DrinkDetails;
