import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user") || null,
};

const userLoggedSlice = createSlice({
  name: "userLogged",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      if (action.payload === null) {
        localStorage.removeItem("user");
        return;
      } else {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    },
  },
});

export const { setUser } = userLoggedSlice.actions;

export default userLoggedSlice.reducer;
