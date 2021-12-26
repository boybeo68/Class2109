import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import alertReducer from "../features/alert/alertSlice";
import authReducer from "../features/auth/authSlice";
import profileReducer from "../features/profile/profileSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    alert: alertReducer,
    auth: authReducer,
    profile: profileReducer,
  },
});
