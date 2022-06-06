import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: { hasError: false, error: null, errorInfo: null },
  reducers: {
    resetError(state) {
      state.hasError = false;
      state.error = null;
      state.errorInfo = null;
    },
    setError(state, action) {
      state.hasError = true;
      state.error = action.payload.error;
      state.errorInfo = action.payload.errorInfo;
    },
  },
});

export const { setError, resetError } = errorSlice.actions;
export default errorSlice.reducer;
