import styles from './header.module.css'
import { Link } from "react-router-dom";

import logo from '/illustrations/drinkify-logo-bold.svg'
import info from '/icons/info.svg'


function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="" />
      </Link>

      <Link className={styles.info} to="/project">
        <img src={info} alt="icono de informacion" />
      </Link>
    </header>
  );
}

export default Header