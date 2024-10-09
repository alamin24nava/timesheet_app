import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
import timesheetReducer from "../features/timesheet/timesheetSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    timesheet: timesheetReducer
  },
});

export default store;
