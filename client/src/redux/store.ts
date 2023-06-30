import { configureStore } from "@reduxjs/toolkit";
import userLoggedReducer from "./features/userLogged";
import querysReducer from "./features/querys";
import cartReducer from "./features/cart";
import cartMenuLoadingReducer from "./features/cartMenuLoading";
import favoritesReducer from "./features/favorites";
import { gameApi } from "./services/games";

const serialize = (state: any) => {
  const { cartMenuLoading, ...restState } = state;
  return restState;
};

export const store = configureStore({
  reducer: {
    [gameApi.reducerPath]: gameApi.reducer,
    userLogged: userLoggedReducer,
    querys: querysReducer,
    cartMenuLoading: cartMenuLoadingReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(gameApi.middleware),
  devTools: {
    serialize: {
      replacer: serialize,
    },
  },
});
