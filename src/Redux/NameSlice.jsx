import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 1, name: "robi", email: "robileo49@gmail.com" },
  { id: 2, name: "setu", email: "setulal@gmail.com" },
  { id: 3, name: "amit", email: "amitmia@gmail.com" },
  { id: 4, name: "sourav", email: "sarkarsourav@gmail.com" },
];
const nameSlice = createSlice({
  name: "nameSlice",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const lastItem = state[state.length - 1];

      const newItem = {
        id: lastItem ? lastItem.id + 1 : 1,
        name: action.payload.name,
        email: action.payload.email,
      };
      state.push(newItem);
    },
    removeContact: (state, action) => {
      return (state = state.filter((item) => item.id != action.payload));
    },
    UpdateContact: (state, action) => {
      const receivedObject = state.find((item) => item.id == action.payload.id);

      if (receivedObject) {
        (receivedObject.name = action.payload.name),
          (receivedObject.email = action.payload.email);
      }
    },
  },
});
export const { addContact, removeContact, UpdateContact } = nameSlice.actions;
export default nameSlice.reducer;
