import { configureStore } from "@reduxjs/toolkit";

import darkModeReducer from "./features/darkMode";
import userLoggedReducer from "./features/userLogged";
import paginateReducer from "./features/paginate";
import genreReducer from "./features/genre";
import { gameApi } from "./services/games";

export const store = configureStore({
  reducer: {
    [gameApi.reducerPath]: gameApi.reducer,
    darkMode: darkModeReducer,
    userLogged: userLoggedReducer,
    paginate: paginateReducer,
    genre: genreReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(gameApi.middleware),
});
