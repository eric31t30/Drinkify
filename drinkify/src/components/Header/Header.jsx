import styles from './header.module.css'

import logo from '/illustrations/drinkify-logo-bold.svg'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="" />
      </Link>
    </header>
  );
}

export default Header