import { createSlice } from "@reduxjs/toolkit";

const currentNameIndex =
  localStorage.getItem("nameIndex") == null
    ? 0
    : localStorage.getItem("nameIndex");

const initialState = {
  nameIndex: currentNameIndex,
};

export const nameIndexSlice = createSlice({
  name: "nameIndex",
  initialState,
  reducers: {
    setNameIndex: (state, action) => {
      console.log("action.payload", action.payload);
      state.nameIndex = action.payload;
      localStorage.setItem("nameIndex", state.nameIndex);
    },
  },
});

export const { setNameIndex } = nameIndexSlice.actions;
export default nameIndexSlice.reducer;
