import styles from './footer.module.css'

import logo from '/illustrations/drinkify-logo.svg'

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <svg
        className={styles["footer-wave"]}
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

      <div className={`${styles["footer-cont"]}`}>
        <main className={styles["footer-main"]}>
          <img
            className={styles["footer-logo"]}
            src={logo}
            alt="logo de drinkify"
            draggable="false"
          />
          <p className={styles["footer-copyright"]}>© 2025 Eric — Drinkify</p>
        </main>

        <div className={`${styles.background} bg-linear-color`}></div>

        <div className={styles.bubbles}></div>
      </div>
    </footer>
  );
}

export default Footer