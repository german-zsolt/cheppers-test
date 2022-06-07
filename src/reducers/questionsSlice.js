import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: { results: null },
  reducers: {
    resetQuestions(state) {
      state.results = null;
    },
    setQuestions(state, action) {
      state.results = action.payload;
    },
  },
});

export const { resetQuestions, setQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
