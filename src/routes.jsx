import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/Header';
import FavoriteProvider from 'context/Favorite';
import Favorites from 'pages/Favorites';
import Homepage from 'pages/Homepage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FavoriteProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/favoritos" element={<Favorites />} />
          </Routes>
        </FavoriteProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
