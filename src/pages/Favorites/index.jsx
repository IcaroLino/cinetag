import Banner from 'components/Banner';
import Card from 'components/Card';
import Title from 'components/Title';
import React from 'react';
import styles from './Favorites.module.css';

export default function Favorites() {
  return (
    <>
      <Banner image="favorites" />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
        <Card id="1" title="Gato" cover="https://thecatapi.com/api/images/get?format=src&type=png" />
      </section>
    </>
  );
}
