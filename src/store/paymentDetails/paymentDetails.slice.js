import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addToStore: (state, { payload: data }) => {
      state.push(data);
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
