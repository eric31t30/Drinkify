import { useEffect, useState } from "react"
import styles from "./scroll-button.module.css"

import arrow from "/icons/arrow.svg"

function ScrollButton() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          setShow(window.scrollY > 300);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

  

    return (
        <div className={`${styles.button} ${show ? styles.show : ""}`} onClick={()=> window.scrollTo({ top: 0, behavior: "smooth"})}>
            <img src={arrow} alt="" />
        </div>
    )
}

export default ScrollButton