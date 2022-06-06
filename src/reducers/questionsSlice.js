import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: { error: null, results: null },
  reducers: {
    resetQuestions(state) {
      state.error = null;
      state.results = null;
    },
    setQuestions(state, action) {
      if (0 === action.payload.response_code) {
        state.error = null;
        state.results = action.payload.results;
      } else {
        state.error = action.payload.response_code;
        state.results = null;
      }
    },
  },
});

export const { resetQuestions, setQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
