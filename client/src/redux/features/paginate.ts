import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  sort: "a-to-z",
};

const paginateSlice = createSlice({
  name: "paginate",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setPage, setSort } = paginateSlice.actions;

export default paginateSlice.reducer;
