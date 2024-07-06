import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../firstStart/index";
export const counterSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.push(action.payload);
    },
    delCourse: (state, action) => {
      const ifCourseExist = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ifCourseExist >= 0) {
        state.splice(ifCourseExist, 1);
      }
    },
    editCourse: (state, action) => {
      const edition = state.findIndex((item) => item.id === action.payload.id);
      if (edition >= 0) {
        state[edition] = action.payload;
      }
    },
  },
});

export const { addCourse, delCourse, editCourse } = counterSlice.actions;

export default counterSlice.reducer;
