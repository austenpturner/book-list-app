import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const bookListSlice = createSlice({
  name: "bookList",
  initialState: initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    removeBook(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookListSlice.actions;

export default bookListSlice.reducer;
