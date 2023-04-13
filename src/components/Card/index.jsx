import React from 'react';
import { useFavoriteContext } from 'context/Favorite';
import favoriteIcon from './favorite.png';
import unfavoriteIcon from './unfavorite.png';
import styles from './Card.module.css';

export default function Card({ id, title, cover }) {
  const { favorites, addFavorite } = useFavoriteContext();
  const isFavorite = favorites.some((fav) => fav.id === id);
  const icon = isFavorite ? favoriteIcon : unfavoriteIcon;

  return (
    <div className={styles.container}>
      <img src={cover} alt={title} className={styles.cover} />
      <h2>{title}</h2>
      <img
        src={icon}
        alt="Favoritar filme"
        className={styles.favorite}
        onClick={() => addFavorite({ id, title, cover })}
      />
    </div>
  );
}
