import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/user.slice";

import paymentReducer from "./paymentDetails/paymentDetails.slice";
export const store = configureStore({
  reducer: {
    payment: paymentReducer,
    user: UserReducer,
  },
});
