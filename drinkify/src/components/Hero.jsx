
import styles from "../styles/hero.module.css";

import logo from "/illustrations/drinkify-logo.svg";
import cocktail1 from "/illustrations/cocktail-1.svg";
import cocktail2 from "/illustrations/cocktail-2.svg";

import leaf1 from "/illustrations/leafs-3.svg";
import leaf2 from "/illustrations/leafs-2.svg";
import lemon from "/illustrations/lemon.svg";

import scroll from "/icons/scroll.svg";

function Hero() {

  const scrolldrinks = () => {
    document.getElementById("drink-list")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.background} bg-layer`}></div>
      <div className={styles["hero-title-cont"]}>
        <div className={styles["hero-title-text"]}>
          <img
            className={styles["hero-title"]}
            src={logo}
            alt="logo de drinkify"
          />
          <p className={styles["hero-slogan"]}>
            Encuentra el trago perfecto para cada momento.
          </p>
        </div>

        <img
          className={styles.scroll}
          src={scroll}
          alt=""
          onClick={() => scrolldrinks()}
        />
      </div>
      <img className={styles["leaf-1"]} src={leaf1} alt="" />
      <img className={styles["leaf-2"]} src={leaf2} alt="" />
      <img className={styles["cocktail-1"]} src={cocktail1} alt="" />
      <img className={styles["cocktail-2"]} src={cocktail2} alt="" />
      <img className={styles.lemon} src={lemon} alt="" />

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
