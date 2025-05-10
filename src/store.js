import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./Redux/NameSlice";
const store = configureStore({
  reducer: {
    first: nameReducer,
  },
});
export default store;
