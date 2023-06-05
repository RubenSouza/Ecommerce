import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: null,
  genre: null,
  page: 1,
  sort: "a-to-z",
  isSearching: false,
  search: null,
};

const querysSlice = createSlice({
  name: "querys",
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setIsSearching: (state, action) => {
      state.isSearching = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const {
  setPrice,
  setGenre,
  setPage,
  setSort,
  setIsSearching,
  setSearch,
} = querysSlice.actions;

export default querysSlice.reducer;
