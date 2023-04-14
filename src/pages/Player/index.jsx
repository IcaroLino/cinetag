import Banner from 'components/Banner';
import Title from 'components/Title';
import React from 'react';
import videos from 'json/db.json';
import NotFound from 'pages/NotFound';
import { useParams } from 'react-router-dom';
import styles from './Player.module.css';

export default function Player() {
  const param = useParams();
  const video = videos.find((vid) => vid.id === Number(param.id));

  if (!video) return <NotFound />;

  return (
    <>
      <Banner image="player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </section>
    </>
  );
}
