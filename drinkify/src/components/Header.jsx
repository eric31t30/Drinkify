import styles from '../styles/header.module.css'

import logo from '../../public/illustrations/drinkify-logo-bold.svg'
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