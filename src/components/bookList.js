import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromToRead,
  removeFromHaveRead,
  markAsRead,
} from "../store/slices/bookListSlice";

export default function BookList({ type }) {
  const dispatch = useDispatch();

  const booksRead = useSelector((state) => state.bookList.haveRead);
  const booksToRead = useSelector((state) => state.bookList.toRead);
  let books;
  if (type === "to-read") {
    books = booksToRead;
  } else {
    books = booksRead;
  }

  function handleRemoveBook(id) {
    if (type === "to-read") {
      dispatch(removeFromToRead(id));
    } else {
      dispatch(removeFromHaveRead(id));
    }
  }

  function handleMarkAsRead(book) {
    // console.log(book);
    dispatch(markAsRead(book.id));
  }

  return (
    <div>
      <h2>{type === "to-read" ? "Books to read" : "Books I've read"}</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-full"
              onClick={() => handleRemoveBook(book.id)}
            >
              remove
            </button>
            {type === "to-read" && (
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded-full"
                onClick={() => handleMarkAsRead(book)}
              >
                mark as read
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
