import { configureStore } from "@reduxjs/toolkit";
import nameIndex from "./reducer";

export const store = configureStore({
  reducer: { nameIndex },
});
