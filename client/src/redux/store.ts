import { configureStore } from "@reduxjs/toolkit";

import userLoggedReducer from "./features/userLogged";
import querysReducer from "./features/querys";
import { gameApi } from "./services/games";

export const store = configureStore({
  reducer: {
    [gameApi.reducerPath]: gameApi.reducer,
    userLogged: userLoggedReducer,
    querys: querysReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(gameApi.middleware),
});
