import { useState } from "react";

import styles from "./drink-hero.module.css";
import { Link } from "react-router-dom";
import { cloudinary } from "../../../utils/Cloudinary";

import arrow from "/icons/arrow-2.svg";
import scroll from "/icons/scroll.svg";

import leafs from "/illustrations/leafs-1.svg";
import dots from "/illustrations/dots.svg";
import blob1 from "/illustrations/blob-1.svg";
import blob2 from "/illustrations/blob-2.svg";

function DrinkHero({ drink }) {

  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollinfo = ()=>{
    document.getElementById("drink-info-scroll")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <div>
      <section
        className={styles["drink-hero-cont"]}
        style={{
          background: drink.color,
        }}
      >
        <div className={styles["drink-hero"]}>
          <figure className={styles["drink-image-cont"]}>
            {!imageLoaded && (
              <div className={styles["image-loader"]}>
                <span className={styles["loader"]}></span>
              </div>
            )}

            {drink.images.gallery.map((e, i) => (
              <div key={e} className={`${styles["drink-image-wrapper"]} ${styles[`wrapper-${i + 1}`]}`}>
                <img
                  className={styles["drink-image"]}
                  src={cloudinary(
                    e,
                    "c_fill,w_500,h_500,g_auto,f_auto,q_auto"
                  )}
                  alt={drink.name}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageLoaded(true)}
                  style={{
                    opacity: imageLoaded ? 1 : 0,
                  }}
                />
              </div>
            ))}

          </figure>

          <article className={styles["drink-main-info"]}>
            <p className={styles["drink-category"]}>{drink.category}</p>
            <h1 className={styles["drink-name"]}>{drink.name}</h1>
            <p className={styles["drink-description"]}>{drink.description}</p>

            <ul className={styles["tags-cont"]}>
              {drink.tags.map((t) => (
                <li key={t} className={styles.tag}>
                  {t}
                </li>
              ))}
            </ul>

            <img
              className={styles["drink-scroll-icon"]}
              src={scroll}
              alt="boton de scroll"
              draggable="false"
              onClick={() => scrollinfo()}
            />
          </article>
        </div>

        <div className={styles.shadow1}></div>
        <div className={styles.shadow2}></div>

        <Link className={styles["back"]} to="/">
          <img
            className={styles["back-icon"]}
            src={arrow}
            alt="regresar"
            draggable="false"
          />
          Volver
        </Link>

        <img
          className={`${styles["blobs"]} ${styles["blob-1"]}`}
          src={blob1}
          alt=""
          draggable="false"
        />
        <img
          className={`${styles["blobs"]} ${styles["blob-2"]}`}
          src={blob2}
          alt=""
          draggable="false"
        />
        <img className={styles["dots"]} src={dots} alt="" draggable="false" />
        <img className={styles["leafs"]} src={leafs} alt="" draggable="false" />
        <div className={styles["circle"]}></div>
      </section>
    </div>
  );
}

export default DrinkHero