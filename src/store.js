/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import usersSlice from "./usersSlice";

const store = configureStore({
  reducer: { counter: counterReducer, users: usersSlice },
});

export default store;
