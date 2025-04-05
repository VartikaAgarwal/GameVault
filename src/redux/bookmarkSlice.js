import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [], // Array of bookmarked games
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      if (!state.favorites.some((game) => game.id === action.payload.id)) {
        state.favorites.push(action.payload);
      }
    },
    removeBookmark: (state, action) => {
      state.favorites = state.favorites.filter((game) => game.id !== action.payload);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
