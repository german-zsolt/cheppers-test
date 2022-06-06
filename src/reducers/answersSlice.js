import { createSlice } from "@reduxjs/toolkit";

const answersSlice = createSlice({
  name: "answers",
  initialState: [],
  reducers: {
    resetAnswers(state) {
      state.splice(0, state.length);
    },
    addAnswer(state, action) {
      state.push(action.payload);
    },
  },
});

export const { resetAnswers, addAnswer } = answersSlice.actions;
export default answersSlice.reducer;
