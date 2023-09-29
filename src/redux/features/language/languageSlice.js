import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: false,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setEnglish: (state) => {
      state.language = true;
    },
    setAze: (state) => {
      state.language = false;
    },
  },
});

export const { setEnglish, setAze } = languageSlice.actions;
export default languageSlice.reducer;
