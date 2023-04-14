import Banner from 'components/Banner';
import Card from 'components/Card';
import Title from 'components/Title';
import React, { useEffect, useState } from 'react';
import styles from './Homepage.module.css';

export default function Homepage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/IcaroLino/cinetag-api/videos')
      .then((res) => res.json())
      .then((data) => setVideos(data));
  });

  return (
    <>
      <Banner image="home" />
      <Title><h1>Um lugar para guardar seus vídeos e filmes!</h1></Title>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card key={video.id} id={video.id} title={video.title} cover={video.cover} />;
        })}
      </section>
    </>
  );
}
