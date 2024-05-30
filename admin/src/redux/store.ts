import { configureStore } from "@reduxjs/toolkit";

import darkModeReducer from "./features/darkMode";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});
