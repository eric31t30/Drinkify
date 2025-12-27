import styles from '../styles/footer.module.css'

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

        <div className={`${styles.background} bg-layer`}></div>

        <div className={styles.bubbles}></div>
      </div>
    </footer>
  );
}

export default Footer



{/* <svg
          className={`${styles["footer-wave"]} ${styles["footer-wave-2"]}`}
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 340"
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,600 L 0,225 C 136,229.89285714285714 272,234.78571428571428 374,217 C 476,199.21428571428572 543.9999999999999,158.75 660,142 C 776.0000000000001,125.25 940,132.21428571428572 1078,150 C 1216,167.78571428571428 1328,196.39285714285714 1440,225 L 1440,600 L 0,600 Z"
            stroke="none"
            strokeWidth="0"
            fill="var(--bg-a-1)"
            fillOpacity="var(--layer-a)"
          ></path>
          <path
            d="M 0,600 L 0,225 C 136,229.89285714285714 272,234.78571428571428 374,217 C 476,199.21428571428572 543.9999999999999,158.75 660,142 C 776.0000000000001,125.25 940,132.21428571428572 1078,150 C 1216,167.78571428571428 1328,196.39285714285714 1440,225 L 1440,600 L 0,600 Z"
            stroke="none"
            strokeWidth="0"
            fill="var(--bg-b-1)"
            fillOpacity=".4"
          ></path>
        </svg>

        
        <svg
          className={`${styles["footer-wave"]} ${styles["footer-wave-1"]}`}
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 340"
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,600 L 0,225 C 182,232.73333333333332 364,240.46666666666664 523,258 C 682,275.53333333333336 818,302.8666666666667 967,299 C 1116,295.1333333333333 1278,260.06666666666666 1440,225 L 1440,600 L 0,600 Z"
            stroke="none"
            strokeWidth="0"
            fill="var(--bg-a-1)"
            fillOpacity="var(--layer-a)"
          ></path>

          <path
            d="M 0,600 L 0,225 C 182,232.73333333333332 364,240.46666666666664 523,258 C 682,275.53333333333336 818,302.8666666666667 967,299 C 1116,295.1333333333333 1278,260.06666666666666 1440,225 L 1440,600 L 0,600 Z"
            stroke="none"
            strokeWidth="0"
            fill="var(--bg-b-1)"
            fillOpacity="var(--layer-b)"
          ></path>
        </svg> */}