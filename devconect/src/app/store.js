import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import alertReducer from "../features/alert/alertSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    alert: alertReducer,
  },
});
