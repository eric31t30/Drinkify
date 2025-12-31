import styles from "./loader.module.css"

function Loader() {
  return (
    <main className={styles["loader-cont"]}>
      <div className={styles.loader}></div>
      <p className={styles["loader-text"]}>Agitando los Ingredientes...</p>
    </main>
  );
}

export default Loader