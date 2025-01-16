import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toRead: [
    {
      id: 1,
      title: "The Great Gatsby",
    },
  ],
  haveRead: [
    {
      id: 2,
      title: "The Catcher in the Rye",
    },
  ],
};

const bookListSlice = createSlice({
  name: "bookList",
  initialState: initialState,
  reducers: {
    addToRead(state, action) {
      state.toRead.push(action.payload);
    },
    removeFromToRead(state, action) {
      state.toRead = state.toRead.filter((book) => book.id !== action.payload);
    },
    removeFromHaveRead(state, action) {
      state.haveRead = state.haveRead.filter(
        (book) => book.id !== action.payload
      );
    },
    markAsRead(state, action) {
      // console.log(action.payload);

      const bookIndex = state.toRead.findIndex(
        (book) => book.id === action.payload
      );
      if (bookIndex > -1) {
        const [book] = state.toRead.splice(bookIndex, 1);
        state.haveRead.push(book);
      }
    },
    updateBookDetails(state, action) {
      const { id, updates, list } = action.payload;
      const targetList = state[list];
      const book = targetList.find((book) => book.id === id);
      if (book) Object.assign(book, updates);
    },
  },
});

export const {
  addToRead,
  removeFromToRead,
  removeFromHaveRead,
  markAsRead,
  updateBookDetails,
} = bookListSlice.actions;

export default bookListSlice.reducer;
