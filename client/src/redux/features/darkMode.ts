import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("mode") || "dark",
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("mode", action.payload);
    },
  },
});

export const { setMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
