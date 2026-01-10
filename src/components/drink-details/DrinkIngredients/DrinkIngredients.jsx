import styles from "./drink-ingredients.module.css";

function DrinkIngredients({ drink }) {
  return (
    <section className={styles["ingredients-cont"]}>
      
      <h2 className={styles["ingredients-title"]}>Ingred<span style={{color: drink.color}}>ientes</span></h2> 
      <div className={styles.ingredients}>
        {drink.ingredients.map((i) => (
          <article className={styles.ingredient} key={i.name}>
            <p className={styles["ingredient-name"]}>{i.name}</p>
            <p className={styles["ingredient-amount"]}>{i.amount}</p>
          </article>
        ))}
      </div>

    </section>
  )
}

export default DrinkIngredients