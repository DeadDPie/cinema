import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./tmp/tmp.slice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: {},
// });
