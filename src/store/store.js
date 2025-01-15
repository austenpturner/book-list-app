import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "./slices/bookListSlice";

const store = configureStore({
  reducer: {
    bookList: bookListReducer,
  },
});

export default store;
