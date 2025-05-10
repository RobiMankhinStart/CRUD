import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 1, name: "robi", email: "robileo49@gmail.com" },
  { id: 2, name: "setu", email: "robileo49@gmail.com" },
];
const nameSlice = createSlice({
  name: "nameSlice",
  initialState: initialState,
  //   reducers:
});
export default nameSlice.reducer;
