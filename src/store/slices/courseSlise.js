import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "",
    author: "",
    linkVideo: "",
    description: "",
  },
];

export const counterSlice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {
    addCourse: (state, action) => {
      state.push(action.payload);
    },
    DelCourse: (state, action) => {
      const ifCourseExist = state.findIndex(
        (item) => item.name === action.payload.name
      );
      if (ifCourseExist > 0) {
        state.splice(ifCourseExist, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCourse } = counterSlice.actions;

export default counterSlice.reducer;
