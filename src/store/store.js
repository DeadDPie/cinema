import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/user.slice";

import paymentReducer from "./paymentDetails/paymentDetails.slice.ts";
export const store = configureStore({
  reducer: {
    payment: paymentReducer,
    user: UserReducer,
  },
});
