import React, { createContext, useContext, useState } from 'react';

export const FavoriteContext = createContext();
FavoriteContext.displayName = 'Favoritos';

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavoriteContext() {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  function addFavorite(newFavorite) {
    const favoriteList = [...favorites];
    const isFavorite = favorites.some((favorite) => favorite.id === newFavorite.id);

    if (!isFavorite) {
      favoriteList.push(newFavorite);
      return setFavorites(favoriteList);
    }

    favoriteList.splice(favoriteList.indexOf(newFavorite), 1);
    return setFavorites(favoriteList);
  }

  return {
    favorites,
    addFavorite,
  };
}
