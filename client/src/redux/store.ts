import { configureStore } from "@reduxjs/toolkit";

import userLoggedReducer from "./features/userLogged";
import querysReducer from "./features/querys";
import cartReducer from "./features/cart";
import favoritesReducer from "./features/favorites";
import { gameApi } from "./services/games";

export const store = configureStore({
  reducer: {
    [gameApi.reducerPath]: gameApi.reducer,
    userLogged: userLoggedReducer,
    querys: querysReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(gameApi.middleware),
});
