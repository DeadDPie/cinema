import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    //isAuthorised: false,
    firstname: "firstname",
    lastname: "lastname",
    middlename: "middlename",
    phone: "",
  },
  reducers: {
    // setAuthorised: (state, { payload: isUserAuthorised }) => {
    //   state.isAuthorised = isUserAuthorised;
    // },
    setPhone: (state, { payload: phoneNumber }) => {
      state.phone = phoneNumber;
    },
  },
});

export const { setPhone } = userSlice.actions;

export default userSlice.reducer;
