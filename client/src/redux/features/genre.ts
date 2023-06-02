import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genre: null,
};

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

export const { setGenre } = genreSlice.actions;

export default genreSlice.reducer;
