import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  library: [],
};

const bookListSlice = createSlice({
  name: "bookList",
  initialState: initialState,
  reducers: {
    addToLibrary(state, action) {
      state.library.push(action.payload);
    },
    removeFromLibrary(state, action) {
      state.library = state.library.filter(
        (book) => book.id !== action.payload
      );
    },
    // markAsRead(state, action) {
    //   // console.log(action.payload);

    //   const bookIndex = state.readList.findIndex(
    //     (book) => book.id === action.payload
    //   );
    //   if (bookIndex > -1) {
    //     const [book] = state.readList.splice(bookIndex, 1);
    //     state.library.push(book);
    //   }
    // },
    // updateBookDetails(state, action) {
    //   const { id, updates, list } = action.payload;
    //   const targetList = state[list];
    //   const book = targetList.find((book) => book.id === id);
    //   if (book) Object.assign(book, updates);
    // },
  },
});

export const { addToLibrary, removeFromLibrary } = bookListSlice.actions;

export default bookListSlice.reducer;
