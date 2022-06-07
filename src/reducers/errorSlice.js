import { createSlice } from "@reduxjs/toolkit";
import { IS_PROD } from "../utils";

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
      IS_PROD || console.log(action.payload);
      state.hasError = true;
      state.error = action.payload;
    },
  },
});

export const { setError, resetError } = errorSlice.actions;
export default errorSlice.reducer;
