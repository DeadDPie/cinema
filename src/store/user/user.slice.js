import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthorised: false,
    firstname: "firstname",
    lastname: "lastname",
    middlename: "middlename",
    phone: "89990009999",
  },
  reducers: {
    setAuthorised: (state, { payload: isUserAuthorised }) => {
      state.isAuthorised = isUserAuthorised;
    },
  },
});

export const { setAuthorised } = userSlice.actions;

export default userSlice.reducer;
