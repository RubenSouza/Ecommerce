import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const cartMenuLoading = createSlice({
  name: "cartMenuLoading",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = cartMenuLoading.actions;

export default cartMenuLoading.reducer;
