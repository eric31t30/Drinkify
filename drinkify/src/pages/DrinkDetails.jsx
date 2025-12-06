import { useEffect, useState } from "react";
import styles from "../styles/drink-details.module.css";
import { useParams } from "react-router-dom";

import DrinkHero from "../components/drink-details/DrinkHero";
import DrinkInfo from "../components/drink-details/DrinkInfo";
import DrinkIngredients from "../components/drink-details/DrinkIngredients";
import DrinkPreparation from "../components/drink-details/DrinkPreparation";

function DrinkDetails() {

  const { id } = useParams();
  const [drink, setDrink] = useState(null)

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

  }, [id])

  
  if (!drink) return <p>Cargando...</p>;

  return (
    <section className={styles.drink}>
      <DrinkHero drink={drink} />
      <DrinkInfo drink={drink} />
      <DrinkIngredients drink={drink} />
      <DrinkPreparation drink={drink} />

    </section>
  );
}

export default DrinkDetails;
