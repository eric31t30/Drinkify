import styles from "./hero.module.css";

import logo from "/illustrations/drinkify-logo.svg";

import scroll from "/icons/scroll.svg";

function Hero({ onScrollToSearch  }) {
  
  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.background} bg-linear-color`}></div>
      <div className={styles["hero-title-cont"]}>
        <div className={styles["hero-title-text"]}>
          <img
            className={styles["hero-title"]}
            src={logo}
            alt="logo de drinkify"
            width="200"
            height="80"
            fetchPriority="high"
          />
          <p className={styles["hero-slogan"]}>
            Encuentra el trago perfecto para cada momento.
          </p>
        </div>

        <img
          className={styles.scroll}
          src={scroll}
          alt=""
          onClick={() => onScrollToSearch()}
        />
      </div>

      <span
        className={`${styles["leaf-1"]} ${styles["hero-deco"]}`}
        aria-hidden="true"
      ></span>
      <span className={`${styles["leaf-2"]} ${styles["hero-deco"]}`}></span>

      <span className={`${styles["cocktail-1"]} ${styles["hero-deco"]}`}></span>
      <span className={`${styles["cocktail-2"]} ${styles["hero-deco"]}`}></span>

      <span className={`${styles.lemon} ${styles["hero-deco"]}`}></span>

      <span
        className={`${styles.ice} ${styles["ice-1"]} ${styles["hero-deco"]}`}
      ></span>
      <span
        className={`${styles.ice} ${styles["ice-2"]} ${styles["hero-deco"]}`}
      ></span>

      <svg
        className={styles["hero-wave-1"]}
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 116"
        fill="none"
      >
        <path
          d="M0 115.82L0 22.8204C117.333 68.1537 234.667 113.487 399 104.82C563.333 96.1537 774.667 33.4871 956 10.8204C1137.33 -11.8463 1288.67 5.48706 1440 22.8204V115.82L0 115.82Z"
          fill="white"
        />
      </svg>
    </section>
  );
}

export default Hero;
