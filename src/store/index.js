import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "../slices/bookListSlice";
import { cartMiddleware } from "../middleware/cartMiddleware";
import { enableMapSet } from "immer";

enableMapSet();

const store = configureStore({
  reducer: {
    bookList: bookListReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(cartMiddleware),
});

export default store;
