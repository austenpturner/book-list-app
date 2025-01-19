import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToLibrary, removeFromLibrary } from "../store/slices/bookListSlice";

export default function BookList({ type, bookSearch = [] }) {
  const dispatch = useDispatch();

  const library = useSelector((state) => state.bookList.library);
  let books;
  if (type === "library") {
    books = library;
  } else {
    books = bookSearch;
  }

  function handleRemoveBook(id) {
    if (type === "library") {
      dispatch(removeFromLibrary(id));
    }
  }

  function handleAddToLibrary(book) {
    // console.log(book);
    dispatch(addToLibrary(book.id));
  }

  useEffect(() => {
    console.log(bookSearch);
  }, [bookSearch]);

  return (
    <div>
      <ul className="ml-20 p-5 pr-2.5 flex flex-wrap gap-2.5">
        {books.map((book) => (
          <li key={book.id} className="w-[calc(20%-10px)]">
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt="book cover"
              className="w-full"
            />
            <h3>{book.volumeInfo.title}</h3>
            <p>
              {`by `}
              {book.volumeInfo.authors.map((author, index) => (
                <span key={index}>
                  {author}
                  {index < book.volumeInfo.authors.length - 1 && ", "}
                </span>
              ))}
            </p>
            {type === "library" ? (
              <button
                className="bg-red-500 text-white px-2 py-1 rounded-full"
                onClick={() => handleRemoveBook(book.id)}
              >
                remove
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded-full"
                onClick={() => handleAddToLibrary(book)}
              >
                add to library
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
