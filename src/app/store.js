import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/blogs/loginSlice";
export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
