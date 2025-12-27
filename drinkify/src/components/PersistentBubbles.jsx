
import { useLocation } from "react-router-dom";
import Bubbles from "../utils/Bubbles";
import styles from "../styles/bubbles.module.css";

export default function PersistentBubbles() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className={`${styles.bubbles} ${isHome ? styles.show : ""}`}>
      <Bubbles />
    </div>
  );
}
