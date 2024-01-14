import { configureStore } from "@reduxjs/toolkit";

import paymentReducer from "./paymentDetails/paymentDetails.slice";
export const store = configureStore({
  reducer: {
    payment: paymentReducer,
  },
});
