import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("mode") || "dark",
};

const topButtonsSlice = createSlice({
  name: "topButtons",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("mode", action.payload);
    },
  },
});

export const { setMode } = topButtonsSlice.actions;

export default topButtonsSlice.reducer;
