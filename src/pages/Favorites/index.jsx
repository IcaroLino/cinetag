/* eslint-disable arrow-body-style */
import Banner from 'components/Banner';
import Card from 'components/Card';
import Title from 'components/Title';
import React from 'react';
import { useFavoriteContext } from 'context/Favorite';
import styles from './Favorites.module.css';

export default function Favorites() {
  const { favorites } = useFavoriteContext();
  return (
    <>
      <Banner image="favorites" />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
        {favorites.map((fav) => {
          return <Card key={fav.id} id={fav.id} title={fav.title} cover={fav.cover} />;
        })}
      </section>
    </>
  );
}
