import { createSlice } from "@reduxjs/toolkit";
export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addOrDelFavorite: (state, action) => {
      const ifCourseExist = state.findIndex(
        (item) => item.name === action.payload.name
      );
      if (ifCourseExist >= 0) {
        state.splice(ifCourseExist, 1);
      } else {
        state.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addOrDelFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
