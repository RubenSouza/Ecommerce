import { createSlice } from "@reduxjs/toolkit";

export interface Favorite {
  _id: string;
  name: string;
  slug: string;
  cover: string;
  price: number;
}

interface FavoritesState {
  favorites: Favorite[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    setFavorite: (state, action) => {
      const { _id, name, slug, cover, price } = action.payload;

      if (state.favorites.length === 0) {
        const favorite = { _id, name, slug, cover, price };
        state.favorites.push(favorite);
      } else {
        const existingFavoriteIndex = state.favorites.findIndex(
          favorite => favorite._id === _id
        );

        if (existingFavoriteIndex !== -1) {
          // Jogo já faz parte da lista de favoritos, remover da lista
          state.favorites.splice(existingFavoriteIndex, 1);
        } else {
          // Jogo não está na lista de favoritos, adicionar à lista
          const favorite = { _id, name, slug, cover, price };
          state.favorites.push(favorite);
        }
      }
    },
  },
});

export const { setFavorites, setFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
