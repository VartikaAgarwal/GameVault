import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../redux/gameSlice"; // Redux Slice

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});
