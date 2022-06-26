import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import todoReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    todo: todoReducer,
  },
});
