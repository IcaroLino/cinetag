import Container from 'components/Container';
import FavoriteProvider from 'context/Favorite';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function DefaultPage() {
  return (
    <main>
      <Container>
        <FavoriteProvider>
          <Outlet />
        </FavoriteProvider>
      </Container>
    </main>
  );
}
