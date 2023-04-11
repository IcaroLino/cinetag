import HeaderLink from 'components/HeaderLink';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="./">
        <img src={logo} alt="Logo do cinetag" />
      </Link>
      <nav>
        <HeaderLink url="./">Home</HeaderLink>
        <HeaderLink url="./Favoritos">Favoritos</HeaderLink>
      </nav>
    </header>
  );
}
