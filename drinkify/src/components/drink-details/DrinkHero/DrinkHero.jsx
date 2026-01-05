import { useState } from "react";

import styles from "./drink-hero.module.css";
import { Link } from "react-router-dom";
import { cloudinary } from "../../../utils/Cloudinary";

import arrow from "/icons/arrow-2.svg";
import scroll from "/icons/scroll.svg";

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

            <div
              className={`${styles["drink-image-wrapper"]} ${
                styles[`wrapper-3`]
              }`}
            >
              <img
                className={styles["drink-image"]}
                src={cloudinary(
                  drink.images.full,
                  "c_fill,w_600,h_600,f_auto,q_auto:eco"
                )}
                srcSet={`
                  ${cloudinary(
                    drink.images.full,
                    "c_fill,w_400,h_400,f_auto,q_auto:eco"
                  )} 400w,
                  ${cloudinary(
                    drink.images.full,
                    "c_fill,w_600,h_600,f_auto,q_auto:eco"
                  )} 600w,
                  ${cloudinary(
                    drink.images.full,
                    "c_fill,w_800,h_800,f_auto,q_auto:eco"
                  )} 800w
                `}
                sizes="(max-width: 768px) 90vw, 600px"
                alt={drink.name}
                width="400"
                height="400"
                fetchPriority="high"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}

              />
            </div>

            {drink.images.gallery.slice(1, 3).map((e, i) => (
              <div
                key={e}
                className={`${styles["drink-image-wrapper"]} ${
                  styles[`wrapper-${i + 1}`]
                }`}
              >
                <img
                  className={`${styles["drink-image"]} ${
                    styles[`decor-${i + 1}`]
                  }`}
                  src={cloudinary(e, "c_fill,w_300,h_300,f_auto,q_auto:eco")}
                  alt=""
                  aria-hidden="true"
                  width="300"
                  height="300"
                  loading="lazy"
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

        <span
          className={`${styles["blobs"]} ${styles["blob-1"]} ${styles["hero-decoration"]}`}
        ></span>
        <span
          className={`${styles["blobs"]} ${styles["blob-2"]} ${styles["hero-decoration"]}`}
        ></span>

        <span className={`${styles.dots} ${styles["hero-decoration"]}`}></span>
        <span className={`${styles.leafs} ${styles["hero-decoration"]}`}></span>

        <div className={styles["circle"]}></div>
      </section>
    </div>
  );
}

export default DrinkHero