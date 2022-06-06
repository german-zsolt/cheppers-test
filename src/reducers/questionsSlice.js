import { createSlice } from "@reduxjs/toolkit";
import initQuestions from "../test_response.json";

const questionsSlice = createSlice({
  name: "questions",
  initialState: initQuestions, //{ error: null, results: null },
  reducers: {
    resetQuestions(state) {
      state.error = null;
      state.results = null;
    },
    setQuestions(state, action) {
      if (0 === action.payload.response_code) {
        state.results = action.payload.results;
      } else {
        state.error = action.payload.response_code;
      }
    },
  },
  /*extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.entities.push(action.payload);
    });
  },*/
});

export const { resetQuestions, setQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
