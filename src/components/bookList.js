import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToLibrary, removeFromLibrary } from "../store/slices/bookListSlice";
import { FaCirclePlus } from "react-icons/fa6";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { Link } from "gatsby";

export default function BookList({ type, bookSearch = [] }) {
  const dispatch = useDispatch();
  const library = useSelector((state) => state.bookList.library);

  console.log(library);

  let books;
  if (type === "library") {
    books = library;
  } else {
    books = bookSearch;
  }

  function handleFindInLibrary(id) {
    const match = library.findIndex((book) => book.id === id);
    if (match !== -1) {
      return true;
    }
  }

  function handleRemoveBook(id) {
    if (type === "library") {
      dispatch(removeFromLibrary(id));
    }
  }

  function handleAddToLibrary(book) {
    dispatch(addToLibrary(book));
  }

  const buttonStyles =
    "text-white px-2 py-1 rounded-full absolute top-1.5 right-1 p-0 background-transparent cursor-pointer drop-shadow-lg hover:scale-105";

  function getButtonType(type, book) {
    switch (type) {
      case "library":
        return (
          <button
            className={buttonStyles}
            onClick={() => handleRemoveBook(book.id)}
          >
            <MdCheckBoxOutlineBlank className="h-9 w-9" />
          </button>
        );
      case "search":
        if (handleFindInLibrary(book.id)) {
          return (
            <button className={buttonStyles}>
              <IoLibrary className="h-9 w-9" />
            </button>
          );
        } else {
          return (
            <button
              className={buttonStyles}
              onClick={() => handleAddToLibrary(book)}
            >
              <FaCirclePlus className="h-9 w-9" />
            </button>
          );
        }
      default:
        return;
    }
  }

  useEffect(() => {
    console.log(library);
  }, [library]);

  const bookList = (
    <ul className="md:ml-20 p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-5">
      {books.map((book) => (
        <li key={book.id} className="grid auto-rows-max gap-1">
          <div className="h-72 sm:h-80 md:h-64 relative overflow-hidden ">
            {getButtonType(type, book)}
            <Link to={`/search/book-details/${book.id}`}>
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="book cover"
                className="object-fill w-full"
              />
            </Link>
          </div>

          <div className="self-start text-center">
            <Link
              to={
                type === "search"
                  ? `/search/book-details/${book.id}`
                  : `/library/book-details/${book.id}`
              }
            >
              <h3 className="font-semibold">{book.volumeInfo.title}</h3>
              <p className="text-sm">
                {`by `}
                {book.volumeInfo.authors.map((author, index) => (
                  <span key={index}>
                    {author}
                    {index < book.volumeInfo.authors.length - 1 && ", "}
                  </span>
                ))}
              </p>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );

  return <div>{books.length === 0 ? <p>No books found</p> : bookList}</div>;
}
