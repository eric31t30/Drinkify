import { Link } from 'react-router-dom';
import { cloudinary } from "../utils/Cloudinary";
import styles from '../styles/drink-card.module.css'

import arrow from '/icons/arrow.svg'

function DrinkCard({ drink }) {
  return (
    <article
      className={styles["drink-card"]}
      style={{
        background: `linear-gradient(180deg, transparent 50%, ${drink.color} 300%)`,
        borderBottom: `2px solid ${drink.color}`,
      }}
    >
      <figure className={styles["drink-image-cont"]}>
        <img
          className={styles["drink-image"]}
          src={cloudinary(drink.images.full, "e_blur:100")}
          alt=""
          loading='lazy'
        />
        <span
          className={styles["drink-level"]}
          style={{ background: drink.color }}
        >
          {drink.alcohol.level}
        </span>
      </figure>

      <div className={styles["drink-text"]}>
        <div>
          <h2 className={styles["drink-name"]}>{drink.name}</h2>
          <p className={styles["drink-category"]}>{drink.category}</p>
        </div>

        <p className={styles["drink-description"]}>{drink.description}</p>

        <div className={styles["drink-button-cont"]}>
          <Link
            to={`/drink/${drink.id}`}
            className={styles["drink-button"]}
            style={{ background: drink.color }}
          >
            <p>Ver Detalles</p>
            <img className={styles["drink-button-icon"]} src={arrow} alt="" />
          </Link>
        </div>

        <svg
          fill={`${drink.color}`}
          className={`${styles["drink-deco"]} ${styles["drink-deco-1"]}`}
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M68.923,0C41.779,0,19.692,22.087,19.692,49.231c0,27.144,22.086,49.231,49.231,49.231
          			c27.144,0,49.231-22.086,49.231-49.231C118.154,22.087,96.067,0,68.923,0z M68.923,78.769c-16.288,0-29.538-13.25-29.538-29.538
          			s13.25-29.538,29.538-29.538c16.289,0,29.539,13.25,29.539,29.538S85.212,78.769,68.923,78.769z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M413.538,354.462c-43.433,0-78.769,35.337-78.769,78.769c0,43.433,35.336,78.769,78.769,78.769
          			c43.433,0,78.769-35.336,78.769-78.769C492.308,389.798,456.971,354.462,413.538,354.462z M413.538,492.308
          			c-32.577,0-59.077-26.5-59.077-59.077c0-32.577,26.5-59.077,59.077-59.077c32.577,0,59.077,26.5,59.077,59.077
          			C472.615,465.808,446.116,492.308,413.538,492.308z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M285.538,29.538c-92.298,0-167.385,75.087-167.385,167.385s75.087,167.385,167.385,167.385
          			s167.385-75.086,167.385-167.385S377.837,29.538,285.538,29.538z M285.538,344.615c-81.442,0-147.692-66.25-147.692-147.692
          			c0-81.442,66.25-147.692,147.692-147.692c81.442,0,147.692,66.25,147.692,147.692
          			C433.231,278.366,366.981,344.615,285.538,344.615z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M285.538,88.615c-59.721,0-108.308,48.587-108.308,108.308c0,5.442,4.404,9.846,9.846,9.846
          			c5.442,0,9.846-4.404,9.846-9.846c0-48.865,39.75-88.615,88.615-88.615c5.442,0,9.846-4.404,9.846-9.846
          			C295.385,93.019,290.981,88.615,285.538,88.615z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M237.615,378.125c-4.779-2.625-10.76-0.865-13.365,3.904c-17.308,31.577-50.423,51.202-86.404,51.202
          			c-54.289,0-98.462-44.173-98.462-98.462c0-39.327,23.336-74.836,59.461-90.442c4.991-2.154,7.289-7.952,5.135-12.942
          			c-2.154-5-7.971-7.279-12.942-5.135c-43.346,18.731-71.346,61.327-71.346,108.519c0,65.154,53,118.154,118.154,118.154
          			c43.173,0,82.904-23.538,103.673-61.433C244.135,386.721,242.384,380.74,237.615,378.125z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M137.846,393.846c-32.577,0-59.077-26.5-59.077-59.077c0-5.442-4.404-9.846-9.846-9.846c-5.442,0-9.846,4.404-9.846,9.846
          			c0,43.433,35.336,78.769,78.769,78.769c5.442,0,9.846-4.404,9.846-9.846C147.692,398.25,143.288,393.846,137.846,393.846z"
              />
            </g>
          </g>
        </svg>

        <svg
          width="800px"
          height="800px"
          viewBox="0 0 1024 1024"
          className={`${styles["drink-deco"]} ${styles["drink-deco-2"]}`}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill={drink.color}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <path d="M516.15744 518.77888m-489.12384 0a489.12384 489.12384 0 1 0 978.24768 0 489.12384 489.12384 0 1 0-978.24768 0Z" />

            <path
              d="M516.15744 518.77888m-432.07168 0a432.07168 432.07168 0 1 0 864.14336 0 432.07168 432.07168 0 1 0-864.14336 0Z"
              fill="#FFFFFF"
            />

            <path d="M537.99424 142.52032v331.8016l233.14944-233.14944c-62.16192-57.11872-143.37024-93.50144-233.14944-98.65216zM501.16608 142.17728c-90.76224 3.57376-173.12768 39.06048-236.40576 95.73888l236.40576 236.40576V142.17728zM475.12064 537.1904H139.72992c4.40832 91.136 40.98048 173.62432 98.82624 236.5696l236.56448-236.5696zM475.12576 500.36224L238.55616 263.79264C180.70528 326.73792 144.13824 409.23136 139.72992 500.36224h335.39584zM501.16608 563.23072L264.76032 799.6416c63.27808 56.68352 145.6384 92.17024 236.40576 95.744v-332.15488zM564.03456 537.1904l232.9856 232.9856c55.97184-62.48448 91.24352-143.56992 95.56992-232.9856h-328.55552zM537.99424 563.23072v331.8016c89.78432-5.15072 170.99264-41.52832 233.14944-98.65216l-233.14944-233.14944z" />

            <path d="M564.03456 500.36224h328.55552c-4.3264-89.41568-39.6032-170.50112-95.56992-232.9856l-232.9856 232.9856z" />
          </g>
        </svg>
      </div>
    </article>
  );
}

export default DrinkCard

{
  /* <dl className={styles["drink-info"]}>
          <div
            className={`${styles["drink-info-cont"]} ${styles["drink-info-abv"]}`}
          >
            <dt className={styles["drink-info-title"]}>ABV</dt>
            <dd className={styles["drink-info-text"]}>{drink.alcohol.abv}%</dd>
          </div>

          <div
            className={`${styles["drink-info-cont"]} ${styles["drink-info-type"]}`}
          >
            <dt className={styles["drink-info-title"]}>Tipo</dt>
            <dd className={styles["drink-info-text"]}>{drink.alcohol.type}</dd>
          </div>

          <div
            className={`${styles["drink-info-cont"]} ${styles["drink-info-ingredients"]}`}
          >
            <dt className={styles["drink-info-title"]}>Ingredientes</dt>
            <dd className={styles["drink-info-text"]}>
              {drink.ingredients.length}
            </dd>
          </div>
        </dl> */
}