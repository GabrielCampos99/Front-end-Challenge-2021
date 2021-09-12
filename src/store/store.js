import { configureStore } from "@reduxjs/toolkit";
import personDataReducer from "./personDataSlice";
import toggleReducer from "./toggleSlice";

export const store = configureStore({
  reducer: {
    pessoa: personDataReducer,
    toggle: toggleReducer,
  },
});
