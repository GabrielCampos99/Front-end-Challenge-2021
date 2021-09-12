import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

export const toggleSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    openToggle(state) {
      state.toggle = true;
    },
    closeToggle(state) {
      state.toggle = false;
    },
  },
});

export const { openToggle, closeToggle } = toggleSlice.actions;

export default toggleSlice.reducer;
