import { configureStore } from "@reduxjs/toolkit";

import darkModeReducer from "./features/darkMode";
import userLoggedReducer from "./features/userLogged";
import { gameApi } from "./services/games";

export const store = configureStore({
  reducer: {
    [gameApi.reducerPath]: gameApi.reducer,
    darkMode: darkModeReducer,
    userLogged: userLoggedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(gameApi.middleware),
});
