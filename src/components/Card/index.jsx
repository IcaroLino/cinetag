import React from 'react';
import styles from './Card.module.css';
import favoriteIco from './favorite.png';

export default function Card({ id, title, cover }) {
  return (
    <div className={styles.container} key={id}>
      <img src={cover} alt={title} className={styles.cover} />
      <h2>{title}</h2>
      <img src={favoriteIco} alt="Favoritar filme" className={styles.favorite} />
    </div>
  );
}
