import Footer from 'components/Footer';
import Header from 'components/Header';
import DefaultPage from 'pages/DefaultPage';
import Favorites from 'pages/Favorites';
import Homepage from 'pages/Homepage';
import NotFound from 'pages/NotFound';
import Player from 'pages/Player';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Homepage />} />
          <Route path="favoritos" element={<Favorites />} />
          <Route path="player/:id" element={<Player />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
