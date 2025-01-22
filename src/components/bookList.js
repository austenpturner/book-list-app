import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToLibrary, removeFromLibrary } from "../store/slices/bookListSlice";
import { FaCirclePlus } from "react-icons/fa6";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { Link } from "gatsby";

export default function BookList({ type, bookSearch = [] }) {
  const dispatch = useDispatch();
  const library = useSelector((state) => state.bookList.library);

  // console.log(type);

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
    dispatch(addToLibrary(book));
  }

  function getButtonStyles(type) {
    const typeStyles = [
      "text-white",
      "px-2",
      "py-1",
      "rounded-full",
      "absolute",
      "top-1.5",
      "right-1",
      "p-0",
      "background-transparent",
      "cursor-pointer",
      "drop-shadow-lg",
      "hover:scale-105",
    ];
    // switch (type) {
    //   case "library":
    //     typeStyles.push("bg-red-500");
    //     break;
    //   case "search":
    //     typeStyles.push("bg-blue-500");
    //   default:
    //     break;
    // }
    return typeStyles.join(" ");
  }

  function getButtonIcon(type) {
    switch (type) {
      case "library":
        return <MdCheckBoxOutlineBlank className="h-9 w-9" />;
      case "search":
        return <FaCirclePlus className="h-9 w-9" />;
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
            <button
              className={getButtonStyles(type)}
              onClick={
                type === "library"
                  ? () => handleRemoveBook(book.id)
                  : () => handleAddToLibrary(book)
              }
            >
              {getButtonIcon(type)}
            </button>
            <Link to={`/search/book-details/${book.id}`}>
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="book cover"
                className="object-fill w-full"
              />
            </Link>
          </div>

          <div className="self-start text-center">
            <Link to={`/search/book-details/${book.id}`}>
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
