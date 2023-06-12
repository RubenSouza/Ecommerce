import { configureStore } from "@reduxjs/toolkit";

import userLoggedReducer from "./features/userLogged";
import querysReducer from "./features/querys";
import cartReducer from "./features/cart";
import { gameApi } from "./services/games";

export const store = configureStore({
  reducer: {
    [gameApi.reducerPath]: gameApi.reducer,
    userLogged: userLoggedReducer,
    querys: querysReducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(gameApi.middleware),
});
