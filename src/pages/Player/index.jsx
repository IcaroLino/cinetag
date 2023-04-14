import Banner from 'components/Banner';
import Title from 'components/Title';
import React, { useEffect, useState } from 'react';
import NotFound from 'pages/NotFound';
import { useParams } from 'react-router-dom';
import styles from './Player.module.css';

export default function Player() {
  const [video, setVideo] = useState();
  const param = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/IcaroLino/cinetag-api/videos?id=${param.id}`)
      .then((res) => res.json())
      .then((vid) => setVideo(...vid));
  });

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
